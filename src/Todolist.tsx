interface person {
  name: string;
  theme:{
  backgroundColor: string;
  color: string;
}
}

export default function TodoList(person: person) {
  return(
      <div style={person.theme}>
          <h1>{person.name}&apos; Todos</h1>
          <img className="avatar"
      src="https://img1.freepng.es/20180604/oet/kisspng-fc-barcelona-dream-league-soccer-el-clsico-2017-sepak-takraw-5b14f585dbc0d9.5963556215281002299001.jpg"
      alt="Gregorio Y. Zara" />
          <ul>
             <li>Improve the videophone</li>
             <li>Prepare aeronautics lectures</li>
             <li>Work on the alcohol-fuelled engine</li>    
          </ul>  
      </div>
  );
}