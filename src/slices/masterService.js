import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosUtil from 'src/utils/axios'
const axios = require("axios")

const initialState = {
    open: false,
    data: [],
    page: 0,
    limit: 5,
    status: 1,
    offset: 0,
    count: 0,
    keyword: ''
}

const setPage = createAsyncThunk('masterService/setPage', async (params) => {
    const promise = new Promise((resolve, reject) => {
        resolve(params);
    });
    return promise.then((data) => {
        return data
    }).catch((error) => {
        return error
    })
})

const setLimit = createAsyncThunk('masterService/setLimit', async (params) => {
    const promise = new Promise((resolve, reject) => {
        resolve(params);
    });
    return promise.then((data) => {
        return data
    }).catch((error) => {
        return error
    })
})

const setOffset = createAsyncThunk('masterService/setOffset', async (params) => {
    const promise = new Promise((resolve, reject) => {
        resolve(params);
    });
    return promise.then((data) => {
        return data
    }).catch((error) => {
        return error
    })
})

const setKeyword = createAsyncThunk('masterService/setKeyword', async (params) => {
    const promise = new Promise((resolve, reject) => {
        resolve(params);
    });
    return promise.then((data) => {
        return data
    }).catch((error) => {
        return error
    })
})

const setTasks = createAsyncThunk('masterService/setTasks', async (params) => {
    const promise = new Promise((resolve, reject) => {
        resolve(params);
    });
    return promise.then((data) => {
        return data
    }).catch((error) => {
        return error
    })
})

const getTasks = createAsyncThunk('masterService/getTasks', async (params, thunkAPI) => {
    const { tasks } = thunkAPI.getState();
    const { keyword, limit, offset } = tasks

    return axiosUtil.request('GET', `/v1/tasks?title=${keyword}&limit=${limit}&offset=${offset}`, null, null).then((response) => {
        return response.data
    }).catch((error) => {
        console.log("error", error)
    })

})

const enableTasks = createAsyncThunk('masterService/enableTasks', async (params, thunkAPI) => {
    const { id, status } = params

    return axiosUtil.request('PUT', `/v1/masterService/enable`, params, null).then((response) => {
        return response.data
    }).catch((error) => {
        console.log("error", error)
    })

})

export const addMasterServiceThunk = createAsyncThunk('addMasterServiceThunk', async (params, thunkAPI) => {
    return axiosUtil.RequestHCAPI('PUT', `/v1/masterService/enable`, params, null).then((response) => {
        return response.data
    }).catch((error) => {
        console.log("error", error)
    })

})

const addMasterServiceBuilder = (builder) => {
    builder.addCase(addMasterServiceThunk.pending, (state, action) => {
        // state.arrBlogs = null
        // state.isPending = true
    })
    builder.addCase(addMasterServiceThunk.fulfilled, (state, action) => {
        // iniHistory.go(-1)
        // state.isPending = false;
        // state.error = null;
    })
    builder.addCase(addMasterServiceThunk.rejected, (state, action) => {
        // state.isPending = false;
    })
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const slice = createSlice({
    name: 'masterService',
    initialState,
    extraReducers: (builder) => {
        // addMasterServiceBuilder(builder)
    },
    reducers: {
        iniAlert: (state, action) => {
            alert("zzzzzzzz")
        },
        addMasterService: (state, action) => {
            const adsf = action.payload.paramMasterService;
            var config = {
                method: "POST",
                url: "/api/master-service/add-new-service",
                data: adsf,
            };
            const result = axios(config)
                .then(function (response) {
                    return response.data
                })
                .catch(function (error) {
                    return 123123
                });
        },
    }

})
module.exports.reducer = slice.reducer
export const { iniAlert, addMasterService } = slice.actions










