import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef, Theme } from 'ag-grid-community'; // Column Definition Type Interface
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-page1',
  imports: [AgGridAngular],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
})
export class Page1Component {
  myTheme = themeQuartz.withParams({
    spacing: 12,
    accentColor: 'red',
  });
  theme: Theme | 'legacy' = this.myTheme;

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];
  rowData: any[] | null = (() => {
    const rowData: any[] = [];
    for (let i = 0; i < 10; i++) {
      rowData.push({
        make: 'Toyota',
        model: 'Celica',
        price: 35000 + i * 1000,
      });
      rowData.push({ make: 'Ford', model: 'Mondeo', price: 32000 + i * 1000 });
      rowData.push({
        make: 'Porsche',
        model: 'Boxster',
        price: 72000 + i * 1000,
      });
    }
    return rowData;
  })();
  defaultColDef: ColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  };
}
