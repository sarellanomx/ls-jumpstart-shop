"use strict";

require("dotenv").config();

const { runMigration } = require("contentful-migration");

// uses options
const options = {
    spaceId: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.CMA_TOKEN,
    environmentId: process.env.NEXT_PUBLIC_ENVIRONMENT,
    yes: true,
};

const errorLog = (error) => {
    console.log("ERROR!!", error);
};

// run all migrations one after the other - skips to the next if error occurs
const migrations = async() => {
    console.log("RUNNING MIGRATIONS with these options --> ", options);
    let statusCode = 0;
    try {
        await runMigration({
            ...options,
            ... {
                filePath: `${__dirname}/migrations_full/05-create-mediaWrapper-contentType.js`,
            },
        });
    } catch (error) {
        errorLog(error);
    }

    try {
        await runMigration({
            ...options,
            ... {
                filePath: `${__dirname}/migrations_full/06-edit-product-contentType-add-images-field.js`,
            },
        });
    } catch (error) {
        errorLog(error);
    }

    try {
        await runMigration({
            ...options,
            ... {
                filePath: `${__dirname}/migrations_full/07-derive-mediaWrapper-entries.js`,
            },
        });
    } catch (error) {
        errorLog(error);
    }

    try {
        await runMigration({
            ...options,
            ... {
                filePath: `${__dirname}/migrations_full/08-populate-product-images-field.js`,
            },
        });
    } catch (error) {
        errorLog(error);
    }

    // try {
    //     await runMigration({
    //         ...options,
    //         ... {
    //             filePath: `${__dirname}/migrations_full/09-edit-product-contentType-remove-image-field.js`,
    //         },
    //     });
    // } catch (error) {
    //     errorLog(error);
    // }

    process.exit(statusCode);
};

try {
    migrations();
} catch (error) {
    errorLog(error);
}