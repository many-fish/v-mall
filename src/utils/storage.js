/*
 * createTime: 2019/7/17 9:38
 * author: wei.wang
 * description: 封装本地缓存storage
 */

let STORAGE_EXPIRE_MAP = 'STORAGE_EXPIRE_MAP';

const storage = window.localStorage;

let Storage = {
    // 获取缓存
    get: function (key) {
        let value = JSON.parse(storage.getItem(key));
        try {
            return value
        } catch (e) {
            return null
        }
    },
    // 设置缓存
    set: function (key, object, expire) {
        if (object !== null && object !== undefined) {
            let value = object;
            if (typeof value !== 'string') {
                try {
                    value = JSON.stringify(object);
                } catch (e) {
                    value = null;
                }
            }
            if (value !== null) {
                storage.setItem(key, value);
                if (expire && expire > 0) {
                    let expireAt = new Date().getTime() + expire * 1000;
                    addExpire(key, expireAt)
                }
            }
        }
    },
    // 移除缓存
    remove: function (key) {
        try {
            storage.removeItem(key);
        } catch (e) {
            throw new Error(e.message)
        }
    },
    // 清理缓存
    clear: function () {
        storage.clear();
    }
};

// 设置过期
function addExpire (key, expireAt) {
    let map = Storage.get(STORAGE_EXPIRE_MAP) || {};
    map[key] = expireAt;
    Storage.set(STORAGE_EXPIRE_MAP, map);
}

export default Storage;
