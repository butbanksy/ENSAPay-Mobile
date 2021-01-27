import React from 'react'
import { Surface } from 'react-native-paper'
import Header from '../../components/common/Header';

export default function InoiceSelectionScreen(props) {
    return (
        <Surface style={{ flex: 1 }}>
            <Header title={props.title} />
        </Surface>

    )
}
