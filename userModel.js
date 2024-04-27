import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
    name: {
        type: String
    },
    dev: {
        type: String
    },
    latestRelease: {
        type: String
    }
    },
    {
        timestamps: true,
        versionkey: false
    })

    const ModelUser = mongoose.model("distros", userSchema)
    export default ModelUser