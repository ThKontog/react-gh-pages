function DessertsList(props) {
    const listItems = props.data
      .filter(dessert => dessert.calories <= 500)
      .sort((a, b) => a.calories - b.calories)
      .map(dessert => {
        return  <li>
                  {dessert.calories} cal - {dessert.name}
                </li>;
      });
    
    return <ul>{listItems}</ul>;
  }
  
  export default DessertsList;
  