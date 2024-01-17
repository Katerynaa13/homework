"use strict";

let company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function displayClientInfo(clientName) {
    if (clientName === company.name) {
        console.log(`type: '${company.type}', platform: '${company.platform}', sellsSolution: '${company.sellsSolution}'`);
        return;
    }

    let client = findClientByName(clientName, company.clients);
    if (client) {
        console.log(`type: '${client.type}', uses: '${client.uses}', sells: '${client.sells}'`);
    } else {
        console.log(`Client '${clientName}' not found.`);
    }
}

function findClientByName(name, clients) {
    for (let client of clients) {
        if (client.name === name) {
            return client;
        }
        if (client.partners) {
            let foundInPartners = findClientByName(name, client.partners);
            if (foundInPartners) {
                return foundInPartners;
            }
        }
    }
    return null;
}

console.log("Result:");
displayClientInfo('Велика Компанія');


