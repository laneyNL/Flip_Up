import React from 'react';
import { withRouter } from 'react-router-dom';
import "./study.css";
import StudyCardContainer from './study_card_container';
import NavContainer from '../nav/nav_container';
import ExperienceBarContainer from './../experience_bar/experience_bar_container'

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.exp = 24;
    this.cap = 100;
    this.level = 1;
    if (this.exp < 300 && this.exp > 100) {
      this.level = 2;
      this.cap = 300;
    } else if (this.exp < 600 && this.exp > 300) {
      this.level = 3;
      this.cap = 600;
    } else if (this.exp < 1100 && this.exp > 600) {
      this.level = 4
      this.cap = 1100;
    }
    this.calculated = false;
    
  }
  
  animateExpBar() {

  }

  calculateExpBar() {
    if (!document.getElementById('study-page-exp-bar')) return
    this.calculated = true;
    let oldWidth = document.getElementById('study-page-exp-bar').style.width
    oldWidth = oldWidth.slice(0, oldWidth.length - 1)
    let newWidth = (this.exp / this.cap)*100
    oldWidth = parseInt(oldWidth, 10)
    setTimeout(function moveExp(){
      oldWidth += 0.05;
      document.getElementById('study-page-exp-bar').style.width = `${oldWidth}%`
      if (oldWidth < newWidth) {
        setTimeout(moveExp, 1)
      }
    }, 1)
    
  }

  getCurrentLevel() {
    return `Lvl ${this.level}`
  }

  getNextLevel() {
    return `Lvl ${this.level + 1}`
  }

  render() {
    if (this.calculated === false) this.calculateExpBar()
    return (
      <div>
          <div className='splash-nav'>
            <NavContainer/>
          </div>
          <ExperienceBarContainer/>
          <div className='study-page-container'> 
              <StudyCardContainer/>
          </div>
          
      </div>
    );
  }
}

export default withRouter(Study);