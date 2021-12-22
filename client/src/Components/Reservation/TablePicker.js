import React, {useState, useEffect} from 'react'
import './TablePicker.css'
import './Reservation.js'




function TablePicker(props) {


const [numGuests, setNumGuests] = useState(0)
const [guestCounter, setGuestCounter] = useState(0)
const [reservedTables, setReservedTables] = useState([])
const [table, setTable] = useState([])  
const [activeButtonA1, setActiveButtonA1] = useState(false)
const [activeButtonA2, setActiveButtonA2] = useState(false)
const [activeButtonB1, setActiveButtonB1] = useState(false)
const [activeButtonB2, setActiveButtonB2] = useState(false)
const [activeButtonC1, setActiveButtonC1] = useState(false)
const [activeButtonC2, setActiveButtonC2] = useState(false)
const [activeButtonC3, setActiveButtonC3] = useState(false)
const [activeButtonC4, setActiveButtonC4] = useState(false)
const [activeButtonD1, setActiveButtonD1] = useState(false)
const [activeButtonD2, setActiveButtonD2] = useState(false)
const [activeButtonD3, setActiveButtonD3] = useState(false)
const [activeButtonD4, setActiveButtonD4] = useState(false)


const clearButtons = () => {
    setTable([])
    setActiveButtonA1(false)
    setActiveButtonA2(false)
    setActiveButtonB1(false)
    setActiveButtonB2(false)
    setActiveButtonC1(false)
    setActiveButtonC2(false)
    setActiveButtonC3(false)
    setActiveButtonC4(false)
    setActiveButtonD1(false)
    setActiveButtonD2(false)
    setActiveButtonD3(false)
    setActiveButtonD4(false)
    
}

const handleA1 = (e) => {
   if (guestCounter < props.numGuests){
        setGuestCounter(guestCounter + 8)
        console.log(props.numGuests)
        console.log(guestCounter)
        setTable(table => [...table, "A1"])
        console.log(table)
        setActiveButtonA1(true)
    } else {
        console.log("test")
    }
    
    
}

const handleActiveA1 = (e) => {
  
        setGuestCounter(guestCounter - 8)
        var value = "A1"
        var index = table.indexOf(value)
        console.log(props.numGuests)
        console.log(guestCounter)
        console.log(index)
        setTable(table => (table.filter((_, i) => i !== index)))
        console.log(table)
   
           
        setActiveButtonA1(false)
    
}

const handleA2 = (e) => {
   if (guestCounter < props.numGuests){
            setGuestCounter(guestCounter + 8)
            setTable(table => [...table, "A2"])
            console.log(guestCounter)
            setActiveButtonA2(true)
        } else {
            console.log("test")
        }
    
    
}

const handleActiveA2 = (e) => {
    
            setGuestCounter(guestCounter - 8)
            var value = "A2"
            var index = table.indexOf(value)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
         
    setActiveButtonA2(false)
}

const handleB1 = (e) => {
    if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 6)
            setTable(table => [...table, "B1"])
            console.log(guestCounter)
            setActiveButtonB1(true)
        } else {
            console.log("test")
        }
    
}

const handleActiveB1 = (e) => {
    
            setGuestCounter(guestCounter - 6)
            var value = "B1"
            var index = table.indexOf(value)
            console.log(props.numGuests)
            console.log(guestCounter)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
                
            setActiveButtonB1(false)
        
    }

const handleB2 = (e) => {
   if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 6)
            setTable(table => [...table, "B2"])
            console.log(guestCounter)
            setActiveButtonB2(true)
        } else {
            console.log("test")
        }
    
}

const handleActiveB2 = (e) => {
    
            setGuestCounter(guestCounter - 6)
            var value = "B2"
            var index = table.indexOf(value)
            
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
                
            setActiveButtonB2(false)
        
    }

const handleC1 = (e) => {
    if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 4)
            setTable(table => [...table, "C1"])
            console.log(guestCounter)
            setActiveButtonC1(true)
        } else {
            console.log("test")
        }
    
}

const handleActiveC1 = (e) => {
    
            setGuestCounter(guestCounter - 4)
            var value = "C1"
            var index = table.indexOf(value)
            console.log(props.numGuests)
            console.log(guestCounter)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
              
            setActiveButtonC1(false)
        
    }

const handleC2 = (e) => {
    if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 4)
            setTable(table => [...table, "C2"])
            console.log(guestCounter)
            setActiveButtonC2(true)
        } else {
            console.log("test")
        }
   
}

const handleActiveC2 = (e) => {
    
            setGuestCounter(guestCounter - 4)
            var value = "C2"
            var index = table.indexOf(value)
            console.log(props.numGuests)
            console.log(guestCounter)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
               
            setActiveButtonC2(false)
        
    }
const handleC3 = (e) => {
   if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 4)
            setTable(table => [...table, "C3"])
            console.log(guestCounter)
            setActiveButtonC3(true)
        } else {
            console.log("test")
        }
    
}

const handleActiveC3 = (e) => {
   
            setGuestCounter(guestCounter - 4)
            var value = "C3"
            var index = table.indexOf(value)
            console.log(props.numGuests)
            console.log(guestCounter)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
                
            setActiveButtonC3(false)
        
    }

const handleC4 = (e) => {
   
        if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 4)
            setTable(table => [...table, "C4"])
            console.log(guestCounter)
            setActiveButtonC4(true)
        } else {
            console.log("test")
        }
    
}

const handleActiveC4 = (e) => {
   
            setGuestCounter(guestCounter - 4)
            var value = "C4"
            var index = table.indexOf(value)
            console.log(props.numGuests)
            console.log(guestCounter)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
            setActiveButtonC4(false)
        
   }
const handleD1 = (e) => {
   if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 2)
            setTable([...table, "D1"])
            console.log(guestCounter)
            setActiveButtonD1(true)
        } else {
            console.log("test")
        }
    
}

const handleActiveD1 = (e) => {
   
            setGuestCounter(guestCounter - 2)
            var value = "D1"
            var index = table.indexOf(value)
            console.log(props.numGuests)
            console.log(guestCounter)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
            
            setActiveButtonD1(false)
        
    }

const handleD2 = (e) => {
    if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 2)
            setTable([...table, "D2"])
            console.log(guestCounter)
            setActiveButtonD2(true)
        } else {
            console.log("test")
        }
    
}

const handleActiveD2 = (e) => {
    
            setGuestCounter(guestCounter - 2)
            var value = "D2"
            var index = table.indexOf(value)
            console.log(props.numGuests)
            console.log(guestCounter)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
                
            setActiveButtonD2(false)
        
    }
const handleD3 = (e) => {
    if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 2)
            setTable(table => [...table, "D3"])
            console.log(guestCounter)
            setActiveButtonD3(true)
        } else {
            console.log("test")
        }
   
}

const handleActiveD3 = (e) => {
   
            setGuestCounter(guestCounter - 2)
            var value = "D3"
            var index = table.indexOf(value)
            console.log(props.numGuests)
            console.log(guestCounter)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
                
            setActiveButtonD3(false)
        
    }

const handleD4 = (e) => {
    if (guestCounter < props.numGuests) {
            setGuestCounter(guestCounter + 2)
            setTable(table => [...table, "D4"])
            console.log(guestCounter)
            setActiveButtonD4(true)
        } else {
            console.log("test")
        }
    
}

const handleActiveD4 = (e) => {
    
            setGuestCounter(guestCounter - 2)
            var value = "D4"
            var index = table.indexOf(value)
            console.log(props.numGuests)
            console.log(guestCounter)
            console.log(index)
            setTable(table => (table.filter((_, i) => i !== index)))
            console.log(table)
       
                
            setActiveButtonD4(false)
        
    }

const loadInfo = (e) => {
    setTable(props.table)
    setNumGuests(props.numGuests)
    
    // console.log("table picked", table)
    // console.log("num guests", numGuests)
    
    // console.log("counter", guestCounter)
}

const loadInfo2 = (e) => {
   
    setReservedTables(props.reservedTables)
    
  //  console.log("reserved tables", reservedTables)
    
}
   
const handleAccept=(e) =>  {
    props.setTrigger(false)
    if (table.length === 0){
        props.setTablePicked(false)
        props.setTable(table)
        
    } else {
        props.setTablePicked(true)
        props.setTable(table)
    }

}

const handleDismiss = (e) => {
    props.setTrigger(false)
    props.setTable([])
    setGuestCounter(0)
    setTable([])
    props.setTablePicked(false)
    clearButtons()
    
}
useEffect(() => loadInfo, [props.trigger])
useEffect(()=> loadInfo2, [props.trigger, props.reservedTables])




  

    return (props.trigger) ? (
        <div className="table-popup">
            <div className="table-popup-inner">
                <button className="table-dismiss-btn" onClick={handleDismiss}>Dismiss</button>
                <button className="table-accept-btn" onClick={handleAccept}>Accept</button>

                
                {(activeButtonA1===true && !reservedTables.includes("A1"))? 
                (<button className="table-a1-btn-active" onClick={handleActiveA1}>8 Persons</button>) : (!reservedTables.includes("A1"))?
                (<button className="table-a1-btn" onClick={handleA1}>8 Persons</button>) : 
                (<button className="table-a1-btn-reserved">8 Persons</button>)}
                
                {(activeButtonA2===true && !reservedTables.includes("A2"))? 
                (<button className="table-a2-btn-active" onClick={handleActiveA2}>8 Persons</button>) : (!reservedTables.includes("A2"))?
                (<button className="table-a2-btn" onClick={handleA2}>8 Persons</button>) : 
                (<button className="table-a2-btn-reserved">8 Persons</button>)}

                {(activeButtonB1===true && !reservedTables.includes("B1"))? 
                (<button className="table-b1-btn-active" onClick={handleActiveB1}>6 Persons</button>) : (!reservedTables.includes("B1"))?
                (<button className="table-b1-btn" onClick={handleB1}>6 Persons</button>) : 
                (<button className="table-b1-btn-reserved">6 Persons</button>)}

                {(activeButtonB2===true && !reservedTables.includes("B2"))? 
                (<button className="table-b2-btn-active" onClick={handleActiveB2}>6 Persons</button>) : (!reservedTables.includes("B2"))?
                (<button className="table-b2-btn" onClick={handleB2}>6 Persons</button>) : 
                (<button className="table-b2-btn-reserved">6 Persons</button>)} 

                {(activeButtonC1===true && !reservedTables.includes("C1"))? 
                (<button className="table-c1-btn-active" onClick={handleActiveC1}>4 Persons</button>) : (!reservedTables.includes("C1"))?
                (<button className="table-c1-btn" onClick={handleC1}>4 Persons</button>) : 
                (<button className="table-c1-btn-reserved">4 Persons</button>)}

                {(activeButtonC2===true && !reservedTables.includes("C2"))? 
                (<button className="table-c2-btn-active" onClick={handleActiveC2}>4 Persons</button>) : (!reservedTables.includes("C2"))?
                (<button className="table-c2-btn" onClick={handleC2}>4 Persons</button>) : 
                (<button className="table-c2-btn-reserved">4 Persons</button>)}

                {(activeButtonC3===true && !reservedTables.includes("C3"))? 
                (<button className="table-c3-btn-active" onClick={handleActiveC3}>4 Persons</button>) : (!reservedTables.includes("C3"))?
                (<button className="table-c3-btn" onClick={handleC3} data-testid="testc3">4 Persons</button>) : 
                (<button className="table-c3-btn-reserved">4 Persons</button>)}

                {(activeButtonC4===true && !reservedTables.includes("C4"))? 
                (<button className="table-c4-btn-active" onClick={handleActiveC4}>4 Persons</button>) : (!reservedTables.includes("C4"))?
                (<button className="table-c4-btn" onClick={handleC4}>4 Persons</button>) : 
                (<button className="table-c4-btn-reserved">4 Persons</button>)} 

                {(activeButtonD1===true && !reservedTables.includes("D1"))? 
                (<button className="table-d1-btn-active" onClick={handleActiveD1}>2 Persons</button>) : (!reservedTables.includes("D1"))?
                (<button className="table-d1-btn" onClick={handleD1}>2 Persons</button>) : 
                (<button className="table-d1-btn-reserved">2 Persons</button>)}

                {(activeButtonD2===true && !reservedTables.includes("D2"))? 
                (<button className="table-d2-btn-active" onClick={handleActiveD2}>2 Persons</button>) : (!reservedTables.includes("D2"))?
                (<button className="table-d2-btn" onClick={handleD2}>2 Persons</button>) : 
                (<button className="table-d2-btn-reserved">2 Persons</button>)}

                {(activeButtonD3===true && !reservedTables.includes("D3"))? 
                (<button className="table-d3-btn-active" onClick={handleActiveD3}>2 Persons</button>) : (!reservedTables.includes("D3"))?
                (<button className="table-d3-btn" onClick={handleD3}>2 Persons</button>) : 
                (<button className="table-d3-btn-reserved">2 Persons</button>)}

                {(activeButtonD4===true && !reservedTables.includes("D4"))? 
                (<button className="table-d4-btn-active" onClick={handleActiveD4}>2 Persons</button>) : (!reservedTables.includes("D4"))?
                (<button className="table-d4-btn" onClick={handleD4}>2 Persons</button>) : 
                (<button className="table-d4-btn-reserved">2 Persons</button>)} 


            </div>

        </div>
    ) : "";
}

export default TablePicker