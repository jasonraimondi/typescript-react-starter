import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SetFrequencyAction, SetFrequencyActionType } from '../infrastructure/redux/actions/SetFrequency.action';
import { SetLanguageAction, SetLanguageActionType } from '../infrastructure/redux/actions/SetLanguage.action';

interface IProps {
   version: number;
   SetFrequencyAction: SetFrequencyActionType;
   SetLanguageAction: SetLanguageActionType;
}

interface IState {
   yourName: string;
}

class Sample extends React.Component<IProps, IState> {
   constructor(props) {
      super(props);
      this.state = {
         yourName: '',
      };
   }

   private get yourName(): string {
      return this.state.yourName === '' ? 'Unknown Name' : this.state.yourName;
   }

   public render() {
      return (
         <div className='app'>
            <p className='your-name'>Your Name: {this.yourName}</p>
            <label>
               Enter Your Name:
               <input type='text'
                      placeholder='Enter Your Name'
                      onChange={(e) => this.setState({ yourName: e.target.value })}
               />
            </label>
            <p>
               <small className='version'>Version: {this.props.version}</small>
            </p>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      language: state.language,
      frequency: state.frequency,
      repositoryList: state.repositoryList,
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(
      {
         SetLanguageAction,
         SetFrequencyAction,
      },
      dispatch,
   );
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
