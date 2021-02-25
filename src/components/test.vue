<template>
    <div>
        <button @click="getSelectedRows()">Get Selected Rows</button>

        <ag-grid-vue style="width: 500px; height: 500px;"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="rowData"
            rowSelection="multiple"

            @grid-ready="onGridReady">
        </ag-grid-vue>
    </div>
</template>

<script>
    import { AgGridVue } from "ag-grid-vue";

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null
            }
        },
        components: {
            AgGridVue
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
                this.columnApi = params.columnApi;
            },
            getSelectedRows() {
                const selectedNodes = this.gridApi.getSelectedNodes();
                const selectedData = selectedNodes.map( node => node.data );
                const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ');
                alert(`Selected nodes: ${selectedDataStringPresentation}`);
            }
        },
        beforeMount() {
            this.columnDefs = [
                {field: 'main_service_id', sortable: true, filter: true, width: 150, editable: true},
                {field: 'service_id', sortable: true, filter: true, width: 115, editable: true },
                {field: 'product_id', sortable: true, filter: true, width: 118, editable: true},
                {field: 'category_id', sortable: true, filter: true, width: 125, editable: true},
                {field: 'sku', sortable: true, filter: true, width: 75, editable: true},
                {field: 'category', sortable: true, filter: true, width: 110, editable: true},
                {field: 'brand', sortable: true, filter: true, width: 130, editable: true },
                {field: 'name', sortable: true, filter: true, width: 89, editable: true },
                {field: 'weight', sortable: true, filter: true, width: 100, editable: true},
                {field: 'active', sortable: true, filter: true, width: 100, editable: true },
                {field: 'mrp', sortable: true, filter: true, width: 79, editable: true },
                {field: 'selling_price', sortable: true, filter: true, width: 130, editable: true },
    ];

            fetch('https://chotabeta.app/dev/testenv/api/product')
                .then(result => result.json())
                .then(rowData => this.rowData = rowData);
        }
    }
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #c1f4cd

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
