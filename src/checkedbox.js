const data = [
    { checked: false, value: 'document 1' },
    { checked: true, value: 'document 2' },
    { checked: true, value: 'document 3' },
    { checked: false, value: 'document 4' },
    { checked: false, value: 'document 5' },
];

const Item = props => (
    <div>
        <input type="checkbox" checked={props.checked} onChange={props.onCheckChange} />
        { props.value }
    </div>
)
var Hello = React.createClass({
    getInitialState() {
        return {
            items: this.props.items.concat(),
        };
    },

    onCheckChange(idx) {
        return () => {
            const items = this.state.items.concat();
            items[idx].checked = !items[idx].checked;
            this.setState({items});
        }
    },

    totalChecked() {
        return this.state.items.filter(props => props.checked).length;
    },

  render() {
    return (
            <div>
                { this.state.items.map((props, idx) => (
                    <Item {...props} key={idx} onCheckChange={this.onCheckChange(idx)} />
                )) }
                Total checked: { this.totalChecked() }
            </div>
        );
  }
});

ReactDOM.render(
  <Hello items={data} />,
  document.getElementById('container')
);