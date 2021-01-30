export const montants = [
    {
        id: 1,
        label: "10DH",
        montant: 10,
    },
    {
        id: 2,
        label: "20DH",
        montant: 20,
    },
    {
        id: 3,
        label: "50DH",
        montant: 50,
    },
    {
        id: 4,
        label: "100DH",
        montant: 100,
    },
];
export const passes = [
    {
        nom: "Internet",
        id: 1,
    },
    {
        nom: "Heures Nationales",
        id: 2,
    },
    {
        nom: "Heures Internationales",
        id: 3,
    },
    {
        nom: "SMS",
        id: 4,
    },
];

export const services = [
    {
        id: 1,
        image:
            "http://www.iam.ma/ImagesMarocTelecom/Phototh%C3%A8que/Images-grandes/maroc-telecom-blanc-fr-grande.jpg",
        name: "IAM RECHARGES",
        invoiceType: "recharge",
    },
    {
        id: 2,
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Inwi-Logo.png/250px-Inwi-Logo.png",
        name: "INWI RECHARGES",
        invoiceType: "recharge",
    },
    {
        id: 3,
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1200px-Orange_logo.svg.png",
        name: "ORANGE RECHARGES",
        invoiceType: "recharge",
    },
    {
        id: 4,
        image:
            "https://media-exp1.licdn.com/dms/image/C511BAQFD_MZ6Chc1QQ/company-background_10000/0/1519797104021?e=2159024400&v=beta&t=HdXBYnrUjsfj-VMo3qouiCTE6dGVBkvhRdMQXFSMfps",
        name: "REDAL ELEC",
        invoiceType: "facture",
    },
];

export const invoices = [
    {
        id: 4,
        reference: "421465-REDAL",
        date: "Novembre 2020",
        price: 200.6,
        paid: false,
    },
    {
        id: 1,
        reference: "491234-REDAL",
        date: "Octobre 2020",
        price: 119.2,
        paid: true,
    },
    {
        id: 2,
        reference: "25644-REDAL",
        date: "Septembre 2020",
        price: 240.23,
        paid: true,
    },
    {
        id: 3,
        reference: "53214-REDAL",
        date: "Décembre 2020",
        price: 170.1,
        paid: false,
    },{
        id: 5,
        reference: "753923-REDAL",
        date: "Janvier 2021",
        price: 152.51,
        paid: false,
    },
];
