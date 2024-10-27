import { Estimate } from "./interfaces";

const estimate:Estimate[]=[
  {
    id:'E1',
    itemDescription:'Edting of floor plans and designs',
    task:'P11T1',
    resource:'drafter',
    qty:1,
    resourceUnits:'Person',
    unitCost:6000,
    totalCost:0,
    currency:'INR'
  },
  {
    id:'E2',
    itemDescription:'Surveying of site',
    task:'P11T2',
    resource:'surveyor',
    qty:2,
    resourceUnits:'Person',
    unitCost:1200,
    totalCost:0,
    currency:'INR'
  },
  {
    id:'E3',
    itemDescription:'Surveying of site',
    task:'P11T2',
    resource:'helpers',
    qty:2,
    resourceUnits:'Person',
    unitCost:600,
    totalCost:0,
    currency:'INR'
  }
]
export default estimate