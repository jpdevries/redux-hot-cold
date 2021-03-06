import React from 'react';
import {connect} from 'react-redux';

import {toggleInfoModal} from '../actions';

import './info-modal.css';

export class InfoModal extends React.Component {
    hide(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    componentDidMount() {
      this.focusHeading();
    }

    focusHeading() {
      this.heading.focus();
    }

    render() {
        return (
            <div hidden={this.props.hidden} aria-hidden={this.props.ariaHidden} className="overlay" id="modal">
                <div className="content">
                    <h3 tabIndex="0" aria-describedby="game-goes-like-this" ref={heading => this.heading = heading}>What do I do?</h3>
                    <div>
                        <p id="game-goes-like-this">This is a Hot or Cold Number Guessing Game. The game goes like&nbsp;this:</p>
                        <ol>
                            <li>I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                            <li>You need to <strong>guess</strong> until you can find the hidden secret number.</li>
                            <li>You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
                        </ol>
                        <p>So, Are you ready?</p>
                        <button className="close" ref={button => this.closeBtn = button} onClick={e => this.hide(e)}>Got It!</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(InfoModal);
