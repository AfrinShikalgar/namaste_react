const hello_element = React.createElement('h1',{},"Hey Hello⭐");
  //Here actually h1 tag is not create,here creates react element or javascript object
  //hello_element is a object

const hello_root = ReactDOM.createRoot(document.getElementById('hello'));

hello_root.render(hello_element);
  //main respnsibility of render is take a object and convert it into h1 element



const bye_element = React.createElement('h2',{id:'bye'},"Bye javascript")
//We can give attribute to h1 element like id,class etc


const bye_root = ReactDOM.createRoot(document.getElementById('bye'));
bye_root.render(bye_element)




// --------------- //
    // <div id="parent">
    //     <div id="child">
    //         <h1>My h1 tag is here!!</h1>
    //     </div>
    // </div>

    //I wanna just create above code using react


 const hierarchy = React.createElement('div',{id:"parent"},
                 React.createElement('div',{id:"child"},
                 React.createElement('h1',{},"My h1 tag is here")));

 const root = ReactDOM.createRoot(document.getElementById("hierarchy"))    
 
 root.render(hierarchy);






 // --------------- //
    // <div id="parent">
    //       <div id="child">
    //         <h1>My h1 tag is here!!</h1>
    //         <h1>Again h1 tag!!</h1>
    //       </div>
    //        <div id="child">
    //         <h1>My h1 tag is here!!</h1>
    //         <h1>Again h1 tag!!</h1>
    //        </div>
    // </div>

    //I wanna just create above code using react

    const myele = React.createElement(
      'div',{id:"parent"},
      [React.createElement('div',{id:"child"},
      [React.createElement('h1',{},"My h1 Tag"),
       React.createElement('h1',{},"Again h1 tag!!")
      ]),
       
       React.createElement('div',{id:"child2"},
      [React.createElement('h1',{},"My h1 Tag"),
       React.createElement('h1',{},"Again h1 tag!!")
    ]),
  ])


  const ugly_code  = ReactDOM.createRoot(document.getElementById('hierarchy2'))

  ugly_code.render(myele);
       
