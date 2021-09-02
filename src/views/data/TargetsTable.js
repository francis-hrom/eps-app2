import React, { useState, useEffect } from 'react';
import validUrl from 'valid-url';
import { Button, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import MaterialTable from 'material-table';

import getAllTargets from '../../logic/getAllTargets';
import addTarget from '../../logic/addTarget';
import editTarget from '../../logic/editTarget';
import deleteTarget from '../../logic/deleteTarget';
import resetTargets from '../../logic/resetTargets';

const TargetsTable = () => {
    const [data, setData] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [
        {
            title: 'Url',
            field: 'url',
            editable: 'onAdd'
        },
        {
            title: 'Selector',
            field: 'selector'
        }
    ];

    useEffect(() => {
        (async () => {
            try {
                const response = await getAllTargets();
                setData(response.data);
            } catch {
                setErrorMessages(['Server error. Please contact administrator.']);
            }
        })();
    }, []);

    const handleRowAdd = (newData, resolve) => {
        setErrorMessages([]);

        //validation
        const errorList = [];
        const { url, selector } = newData;
        if (!url || !validUrl.isUri(url)) {
            errorList.push('Please enter valid url.');
        }
        if (!selector) {
            errorList.push('Please enter a valid selector.');
        }

        if (errorList.length > 0) {
            setErrorMessages(errorList);
            resolve();
        } else {
            (async () => {
                try {
                    await addTarget(url, selector);
                    const dataToAdd = [...data];
                    dataToAdd.push(newData);
                    setData(dataToAdd);
                } catch (error) {
                    if (!error.response) {
                        setErrorMessages(['Server error. Please contact administrator.']);
                    } else {
                        setErrorMessages([error.response.data]);
                    }
                } finally {
                    resolve();
                }
            })();
        }
    };

    const handleRowUpdate = (newData, oldData, resolve) => {
        setErrorMessages([]);

        //validation
        const errorList = [];
        const { _id, selector } = newData;
        if (!selector) {
            errorList.push('Please enter a valid selector.');
        }

        if (errorList.length > 0) {
            setErrorMessages(errorList);
            resolve();
        } else {
            (async () => {
                try {
                    await editTarget(_id, selector);
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
                } catch (error) {
                    if (!error.response) {
                        setErrorMessages(['Server error. Please contact administrator.']);
                    } else {
                        setErrorMessages([error.response.data]);
                    }
                } finally {
                    resolve();
                }
            })();
        }
    };

    const handleRowDelete = async (oldData, resolve) => {
        setErrorMessages([]);

        try {
            await deleteTarget(oldData._id);
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
        } catch (error) {
            if (!error.response) {
                setErrorMessages(['Server error. Please contact administrator.']);
            } else {
                setErrorMessages([error.response.data]);
            }
        } finally {
            resolve();
        }
    };

    const handleSetDefault = async () => {
        // eslint-disable-next-line no-restricted-globals
        const confirmation = confirm(
            'All data from Targets will be deleted and default test data will be added. Do you want want to proceed?'
        );
        if (confirmation) {
            setLoading(true);
            setErrorMessages([]);

            (async () => {
                try {
                    const response = await resetTargets();
                    console.log(response);
                    setData(response.data);
                    alert(
                        'Data has been reset to defaults successfully! This reset functionality is here just for the testing purposes (in production it would be removed, in order to prevent unwanted data deletion by an user).'
                    );
                } catch (error) {
                    if (!error.response) {
                        setErrorMessages(['Server error. Please contact administrator.']);
                    } else {
                        setErrorMessages([error.response.data]);
                    }
                } finally {
                    setLoading(false);
                }
            })();
        }
    };

    return (
        <div className="TargetsTable" data-testid="TargetsTable">
            <MaterialTable
                title="Targets"
                data={data}
                columns={columns}
                options={{
                    search: true,
                    paging: true,
                    filtering: true,
                    exportButton: true,
                    exportAllData: true
                }}
                localization={{
                    body: {
                        emptyDataSourceMessage: <p>{errorMessages.length ? 'SERVER ERROR' : 'Loading data ...'}</p>
                    }
                }}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            handleRowUpdate(newData, oldData, resolve);
                        }),
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            handleRowAdd(newData, resolve);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            handleRowDelete(oldData, resolve);
                        })
                }}
            />

            {errorMessages.length > 0 && (
                <Alert severity="error">
                    <ul>
                        {errorMessages.map((el, i) => (
                            <li key={i}>{el}</li>
                        ))}
                    </ul>
                </Alert>
            )}

            {loading ? (
                <CircularProgress />
            ) : (
                <Button variant="contained" onClick={handleSetDefault} startIcon={<RestoreFromTrashIcon />}>
                    Reset to default test data
                </Button>
            )}
        </div>
    );
};

export default TargetsTable;
