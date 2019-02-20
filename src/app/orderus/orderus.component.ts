import { Component, OnInit } from '@angular/core';
import { provideRouterInitializer } from '@angular/router/src/router_module';
import { purePipeDef } from '@angular/core/src/view';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

@Component({
  selector: 'app-orderus',
  templateUrl: './orderus.component.html',
  styleUrls: ['./orderus.component.css']
})
export class OrderusComponent  {

  niDish=['Daal Rice','aloo puri','Rajma-Chawal','Paneer Makhani', 'Matar Paneer',
  'Paneer Tikka Masala', 'Palak Corn', 'Dum Aloo', 'Aloo Palak Gravy',
  'Veg Kofta Recipe'];

  siDish=['vada','rava-idli','plain-dosa', 'rava-dosa','uttapam','pongal',
  'rice-idli', 'rasam-vada','akki-roti', 'curd-rice'];

  cDish=['veg-hakka noodle','veg noodles','honey chilli potato','chowmein',
  'chow-chow soup', 'munchurian','fried-rice','gralic bread','momos','monchow soup' ];

  iDish=['Caprese Salad with Pesto Sauce','Panzenella','Bruschetta','Focaccia Bread',
  'Pasta Carbonara','Margherita Pizza','Mushroom Risotto','Pasta','tomato pizza',
  'mixed vegetable pasta'];

  hDish=['Aloo chaat','Bhalla/aloo tikki','Aloo tikki','aloo-Puri','kachori','Bhelpuri',
    'Ragda Patties','Aloo Tikki Chaat','Cheela','gol-gappe'];
  
  bDish=['Beer','Cider','Distilled (liquor)','Hard soda','Wine','Barley',
    'Hot drinks','Mixed drinks']


}
