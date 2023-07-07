import { React, Component } from 'react'
import { TableRow } from './TableRow';
class Classlistemp extends Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "id": 1,
                        "name": "Foo",
                        "age": "20"
                    },
                    {
                        "id": 2,
                        "name": "Bar",
                        "age": "30"
                    },
                    {
                        "id": 3,
                        "name": "Baz",
                        "age": "40"
                    }
                ]
        }
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i}  data={person} />)}
                    </tbody></table>
            </div>
        );
    }
}
export default Classlistemp;
