export function Emp(props) {
    return (
        <div style={{ border: "3px  solid  red" }}>

            <p>Employee  ID  :  <b>{props.data.Id}</b></p>
            <p>Employee  Name  :  <b>{props.data.Name}</b></p>
            <p>Employee  Location  :  <b>{props.data.Location}</b></p>
            <p>Employee  Salary  :  <b>{props.data.Salary}</b></p>
        </div>);

}