function store(){
    const cars={
        brands:brand.value,
        Price:price.value,
        keys:key.value
    }
    if (cars.keys in localStorage) {
        alert('car already exit')
    }
    else {
        localStorage.setItem(cars.keys, JSON.stringify(cars))
        alert('car added suceessfully')
    }
}
function retrieve(){
    let check=keyvalue.value
    let cars=JSON.parse(localStorage.getItem(check))
    console.log(cars);
    result.innerHTML=`<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Car Brand:${cars.brands}</li>
      <li class="list-group-item">Price:${cars.Price}</li>
      <li class="list-group-item">Key:${cars.keys}</li>
    </ul>
  </div>`
}

function deletez(){
    let removes=del.value
    let cars=JSON.parse(localStorage.getItem(removes))
    localStorage.removeItem(removes)
    alert('successfully  removed')
}

function clearz(){
    localStorage.clear()
    alert('clear all records')
}