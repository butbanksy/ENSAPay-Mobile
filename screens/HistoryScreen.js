import React from 'react'
import { Surface } from 'react-native-paper'
import ServiceCardList from '../components/services/ServiceCardList';
import Header from '../components/common/Header';
import HistoryItem from '../components/history/HistoryItem';


export default function HomeScreen(props) {
    return (
        <Surface style={{ flex: 1 }}>
            <Header title="Historique" />
            <HistoryItem price={10} name="RECHARGE INWI" date="19/01/2021" transactionId="T1531" image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Inwi-Logo.png/250px-Inwi-Logo.png" />
            <HistoryItem price={250} name="FACTURE ADSL IAM" date="10/01/2021" transactionId="T623" image="http://www.iam.ma/ImagesMarocTelecom/Phototh%C3%A8que/Images-grandes/maroc-telecom-blanc-fr-grande.jpg" />
            <HistoryItem price={140.39} name="FACTURE REDAL ELEC" date="29/12/2020" transactionId="T254" image="https://media-exp1.licdn.com/dms/image/C511BAQFD_MZ6Chc1QQ/company-background_10000/0/1519797104021?e=2159024400&v=beta&t=HdXBYnrUjsfj-VMo3qouiCTE6dGVBkvhRdMQXFSMfps" />
            <HistoryItem price={35.39} name="TACOS DE LYON" date="29/12/2020" transactionId="T461" image="https://www.eat.ma/wp-content/uploads/00-1.jpg" />
        </Surface>


    )
}
