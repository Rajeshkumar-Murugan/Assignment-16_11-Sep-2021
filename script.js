
let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ];
  
  const Alignment=document.createElement('div');
  Alignment.setAttribute("class", "Alignment");
  document.body.append(Alignment);
  
  const Container = document.createElement('div')
  Container.setAttribute("class", "container-fluid");
  Alignment.append(Container);

  const rows = document.createElement('div')
  rows.setAttribute("class", "row");
  Container.append(rows);
  
  
 
  

countriesInfo.forEach((element)=>{
    const Cols = document.createElement('div')
    Cols.setAttribute("class", "col-5 col-sm-4 col-md-4");
    Cols.setAttribute("id", "flagalign");
    rows.append(Cols);
    Cols.innerHTML= `
    <img src=${element.flag}>
   <h5><b>${element.name}</b></h5>
   <p><b>Population:</b> ${element.population}</p> 
   <p><b>Region:</b> ${element.region}</p>
   <p><b>Capital:</b> ${element.capital}</p>`});


  

  
  
  