import React from 'react';

class Complex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number : '****************',
            ValidThru :'11/50',
            Valid : '',
            name :'CARDHOLDER',
        }
        }
    numberChange = n => {
        this.setState({
          number: n.target.value ,
          
        });
    }    
    nameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    validChange=(v)=>{
        this.setState({
            ValidThru : v.target.value.slice(0,2) + '/' + v.target.value.slice(2,4)
        //    Valid : ValidThru.slice(0,2) + '/' + ValidThru.slice(2)
        });
    }

    render() {
        return (
            <div className="complex">
                <div className='Credit-Card' >
                    <h1 className='Credit-Card-title'>CREDIT CARD </h1>
                    <div className='Credit-Card-chip'>
                        <img src='https://pngimage.net/wp-content/uploads/2018/05/credit-card-chip-png-9.png' width='20%' />
                    </div>
                    <div className='Credit-Card-number'>
                        <h5> {this.state.number.replace(/(.{4})/g, '$1 ')} </h5>
                    </div>
                    <div className='Credit-Card-Content '>
                        <div className='Credit-Card-holder'>
                            <h1>5422</h1>
                            <h1>{this.state.name.toUpperCase()}</h1>
                        </div>
                        <div className='valid'>
                            <p> VALID <br></br>THRU</p>
                        </div>
                        <div className='Credit-Card-Valid'>
                            <p className='month'>MONTH/YEAR</p>
                            <h1 className='valid'> <i class="fas fa-caret-right"></i>{this.state.ValidThru}</h1>
                        </div>

                        <div className='Credit-Card-Logo'>
                            <img src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg" />
                        </div>

                    </div>
                </div>
                <div className='inputs'>
                    <input type="text" maxLength="16" onChange={this.numberChange} placeholder='Number' />
                    <input type="text"  maxLength='20'  onChange={this.nameChange} placeholder='name' />
                    <input  type="text" maxLength="4"  onChange={this.validChange} placeholder='ValidTHru' />
                </div>
            </div>
        )

    }
}

export default Complex