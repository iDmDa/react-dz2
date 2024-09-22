import { useState } from "react";

export function MessList() {
    const [mes, setMes] = useState([
        {id: 'id1', text: "msg 1", head: "Первый комментарий"},
        {id: 'id2', text: "msg 2", head: "Второй комментарий"},
        {id: 'id3', text: "msg 3", head: "Третий комментарий"},
    ]);

    const hDelete = (id) => {
        setMes(mes.filter(message => message.id !== id));
    };

    return mes.map(mes => 
        <>
            <h3>{mes.head}</h3>
            <div key={mes.id}>{mes.text} 
                <button onClick={() => hDelete(mes.id)}>Удалить</button>
            </div>
        </>
    )
}

export default MessList;