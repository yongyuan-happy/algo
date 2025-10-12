function jsonDiff(oldObj, newObj) {
    const result = { added: {}, deleted: {}, updated: {} };
    const pathStack = [];

    function diff(o1, o2) {
        const keys = new Set([...Object.keys(o1 || {}), ...Object.keys(o2 || {})]);

        for (const key of keys) {
            const oldVal = o1 ? o1[key] : undefined;
            const newVal = o2 ? o2[key] : undefined;
            const inOld = key in (o1 || {});
            const inNew = key in (o2 || {});

            pathStack.push(key);
            const pathKey = pathStack.join(".");

            if (!inOld) {
                result.added[pathKey] = newVal;
            } else if (!inNew) {
                result.deleted[pathKey] = oldVal;
            } else if (isObject(oldVal) && isObject(newVal)) {
                // 递归比较嵌套对象
                diff(oldVal, newVal);
            } else if (Array.isArray(oldVal) && Array.isArray(newVal)) {
                // 数组整体比较（可扩展为逐项 diff）
                if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) {
                    result.updated[pathKey] = { old: oldVal, new: newVal };
                }
            } else if (oldVal !== newVal) {
                result.updated[pathKey] = { old: oldVal, new: newVal };
            }

            pathStack.pop();
        }
    }

    diff(oldObj, newObj);
    return result;
}

function isObject(val) {
    return typeof val === "object" && val !== null && !Array.isArray(val);
}

