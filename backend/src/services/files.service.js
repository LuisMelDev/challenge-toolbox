const fetch = require("node-fetch");
const utils = require("../utils");

const getData = async () => {
    try {
        const pathsfiles = await getList();
        const files = [];

        for (let file of pathsfiles.files) {
            const fileData = await getFile(file);

            if (fileData === undefined) continue;

            files.push(fileData);
        }

        return files;
    } catch (e) {
        throw new Error("Error in requests to API");
    }
};

const getFile = async (filename) => {
    try {
        const getfile = await fetch(
            `https://echo-serv.tbxnet.com/v1/secret/file/${filename}`,
            {
                headers: {
                    authorization: "Bearer aSuperSecretKey",
                },
            }
        );
        const fileBuffer = await getfile.arrayBuffer();

        return utils.csvJSON(utils.toString(fileBuffer));
    } catch (e) {
        return undefined
    }
};

const getList = async () => {
    try {
        const getFiles = await fetch(
            "https://echo-serv.tbxnet.com/v1/secret/files",
            {
                headers: {
                    authorization: "Bearer aSuperSecretKey",
                },
            }
        );

        const pathsfiles = await getFiles.json();

        return pathsfiles;
    } catch (error) {}
};

module.exports = {
    getData,
    getList,
    getFile,
};
