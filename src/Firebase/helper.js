// import React from "react";
import {fire} from './index';
// eslint-disable-next-line
const userRegister = {
    // eslint-disable-next-line
    Email: '',
    Phone_Number: '',
    Password: '',
    Conform_Password: ''
};
const userSettings = {
    First_name: '',
    Middle_name: '',
    Last_name: '',
    Date_of_birth: '',
    Nationality: '',
    ID_copy_upload: ''
};
const userBinanceSettings = {
    Api_key: '',
    Secret_key: ''
};
const userAppSettings = {
    app_key_use: false,
    app_key_1: '',
    app_key_2: '',
    app_key_3: '',
    app_key_4: '',
};
// export const userDriver = {
//     name_$I_MINCHAR6_MAXCHAR100: '',
//     last_name: '',
//     email_$M_I: '',
//     password: '',
//     ADR_class: '',
//     upload_documents_$P_I: [],
//     truck_plate_number: '',
//     vehicle_model: '',
//     euro_class: '',
//     HPK_horse_power: '',
//     engine: '',
//     max_weight: 0,
// };
/**
 *  In All JSon's objects we use special symbols, after "$"
 *  Dictionary:
 *  I - important*
 *  P - photo array input btn
 *  V - video array input btn
 *  H - hide field
 *
 *
 */
export function generateNormalName(data) {
    // Change name - replace "_"
    let arr = [];
    let newArr = [];
    let optionsValue = [];
    let changedData = data.replaceAll('_', ' ');
    if (!changedData) return [];
    // First letter to UpperCase
    // changedData = changedData[0].toUpperCase() + changedData.slice(1);
    // Divide array to chars and get all options key
    arr = changedData.split('');
    let number$ = changedData.indexOf('$');
    let opt = [];

    for (let i = 0; i < arr.length; i++) {
        if (number$ < 0) {
            return {
                key: arr.join(''),
                type: []
            }
        }
        if (i < number$) {
            //delete space in the end of key
            if (i !== number$ - 1) {
                newArr.push(arr[i])
            }
        }
        if (i > number$) {
            if (arr[i] === " ") {
                optionsValue.push(opt.join(''));
                opt = []
            } else if (i === arr.length - 1) {
                opt.push(arr[i]);
                optionsValue.push(opt.join(''));
                opt = []
            } else {
                opt.push(arr[i])
            }
        }
    }
    return {
        key: newArr.join(''),
        type: optionsValue
    }
}
export function checkProblem(forms) {
    let problems = [];
    let repeatPasswordArr = []
    // eslint-disable-next-line
    Object.entries(forms).map((el) => {
        const string = el[1].value
        el[1].options.forEach((o) => {

            if (o === "I" && string === "") {
                problems.push({el: el[1], msg: "Please fill in this field"})
            } else if (o === 'P' && typeof string !== "string") {
                problems.push({el: el[1], msg: "photo array"})
            } else if (o === 'R' && typeof string === "string") {
                //check password repeat
                if (repeatPasswordArr.length === 0 && string) {
                    repeatPasswordArr.push(string)
                } else {
                    repeatPasswordArr.push(string)

                    if (repeatPasswordArr[0] === repeatPasswordArr[1]) {
                        return
                    }
                    if (repeatPasswordArr[0] !== repeatPasswordArr[1]) {
                        problems.push({el: el[1], msg: "password not match"})
                    }
                }
            } else if (o.includes('PW') && typeof string === "string") {
                console.log('PW', string, o)
                const checkedData = o.replace('PW', '').split('')
                let counter = 0
                // eslint-disable-next-line
                checkedData.map((el, indx) => {
                    //uppercase case
                    if (el === 'u' && typeof +checkedData[indx + 1] === 'number') {
                        // eslint-disable-next-line
                        let number = checkedData[indx + 1]

                        // eslint-disable-next-line
                        string.split('').map(character => {
                            console.log('chars', character)

                            // eslint-disable-next-line
                            if (character == character.toUpperCase()) {
                                counter = counter + 1
                            }
                        })
                        if (!counter) {
                            console.log('sdfslkfj', counter)
                            problems.push({el: el[1], msg: "need capital letter in your password"})
                        }

                    }
                })

            }

        })
    });
    return problems;
}
export function setDataToFirebase(forms) {
    let result = {}
    // eslint-disable-next-line
    forms.map(el => {
            result = {...result, [el.keyText]: el.value}
        }
    )
    return result
}
/*** ================================================================================
 * FIREBASE
 * ================================================================================*/
export function getCollection(collection) {
    return new Promise(function (resolve, reject) {
        fire.firestore().collection(collection).get().then(res => {
            const data = [];
            res.forEach(doc => {
                data.push({
                    idPost: doc.id,
                    ...doc.data()
                })
            });
            resolve(data)
        }).catch(err => {
            reject(err);
        });
    });
}
export function getDocInCollection(collection, id) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).doc(id)
                .get()
                .then(querySnapshot => {
                    resolve(querySnapshot.data());
                });
        } catch (e) {
            reject(e);
        }
    })
}
export function getCollectionWhereKeyValue(collection, key, value) {
    return new Promise(function (resolve, reject) {
        fire.firestore().collection(collection).where(key, "==", value).get().then(res => {
            const data = [];
            res.forEach(doc => {
                data.push({
                    idPost: doc.id,
                    ...doc.data()
                })
            });
            resolve(data)
        }).catch(err => {
            reject(err);
        });
    });
}
export function setDocumentToCollection(collection, document) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).add(document)
                .then(r => {
                    resolve({result: r});
                }).catch(e => {
                reject(e);
            })
        } catch (e) {
            reject(e);
        }
    })
}
export function updateDocumentInCollection(collection, document, idDocumnent) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).doc(idDocumnent).update(document).then(r => {
                resolve({result: r})
            }).catch(e => {
                reject(e);
            })
        } catch (e) {
            reject(e);
        }
    })
}
export function deleteDocumentFromCollectionWithID(collection, idPost) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).doc(idPost).delete()
                .then(result => {
                    resolve(result)
                }).catch(function (error) {
                reject(error)
            });
        } catch (e) {
            reject(e)
        }
    })
}
/*** ================================================================================
 * USER
 * ================================================================================*/
export function createNewUser(user) {
    return new Promise(function (resolve, reject) {
        getCollectionWhereKeyValue('users', 'uid_firebase', user.uid).then( r => {
            console.log(r.length)
            if (r.length === 0){
                setDocumentToCollection('users', {
                    ...userSettings,
                    ...userBinanceSettings,
                    ...userAppSettings,
                    uid_firebase: user.uid,
                    displayName_firebase: user.displayName,
                    email_firebase: user.email,
                    emailVerified_firebase: user.emailVerified,
                    phoneNumber_firebase: user.phoneNumber,
                    photoURL_firebase: user.photoURL,
                }).then( r => {
                    resolve(r)
                }).catch( e => {
                    reject(e)
                })
            }else {
                console.log("ALREADY REGISTER")
            }
        }).catch( e => {
            reject(e)
        })
    });
}



