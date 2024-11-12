/* const container = document.getElementById('graph');

const nodes = new vis.DataSet([
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' }
]);

const edges = new vis.DataSet([
    { from: 1, to: 2, label: '5', font: { align: 'middle' } },
    { from: 1, to: 3, label: '3', font: { align: 'middle' } },
    { from: 2, to: 4, label: '2', font: { align: 'middle' } },
    { from: 2, to: 5, label: '4', font: { align: 'middle' } }
]);


const data = { nodes, edges };
const options = {
    nodes: {
        shape: 'circle',
        color: {
            border: '#2B7CE9',
            background: '#97C2FC',
            highlight: {
                border: '#2B7CE9',
                background: '#D2E5FF'
            }
        },
        font: { color: '#343434' }
    },
    edges: {
        color: '#848484',
        width: 2,
        smooth: { type: 'dynamic' },
        font: {
            size: 14,
            color: '#F0F0F0',
            align: 'middle',
            strokeWidth: 0
        },
    },
    physics: {
        enabled: true,
        stabilization: { iterations: 1000 }
    }
};

const network = new vis.Network(container, data, options);
 */