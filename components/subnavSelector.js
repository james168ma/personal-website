import styles from './subnavSelector.module.css'
import utilStyles from '../styles/utils.module.css'

export default class SubnavSelector extends React.Component {
  constructor(props) {
    super(props)
    let collapsed = this.props.selected ? false : true
    this.state = { collapsed }
    this.changeCollapse = this.changeCollapse.bind(this)
    this.collapse = this.collapse.bind(this)
    this.expand = this.expand.bind(this)
    this.subnavRef = React.createRef();
  }

  collapse() {
    let elem = this.subnavRef.current
    // get the height of the element's inner content, regardless of its actual size
    const sectionHeight = elem.scrollHeight
    const elementTransition = elem.style.transition

    elem.style.height = sectionHeight + 'px'
    requestAnimationFrame(function() {
      elem.style.transition = elementTransition

      // on the next frame (as soon as the previous style change has taken effect),
      // change height to 0
      requestAnimationFrame(function() {
        elem.style.height = '0'
      })
    })

    // mark the section as collapsed
    this.setState({ collapsed: true })
  }

  expand() {
    let elem = this.subnavRef.current
    // get the height of the element's inner content, regardless of its actual size
    let sectionHeight = elem.scrollHeight
    // have the element transition to the height of its inner content
    elem.style.height = sectionHeight + 'px'

    // when the next css transition finishes (which should be the one we just triggered)
    elem.addEventListener('transitionend', function remove(e) {
      // remove this event listener so it only gets triggered once
      elem.removeEventListener('transitionend', remove)
      // make height auto
      elem.style.height = '100'
    });

    // mark the section as not collapsed
    this.setState({ collapsed: false })
  }

  // toggle the collapsed state
  changeCollapse() {
    this.props.toggleNav()
    if(this.state.collapsed) this.expand()
    else this.collapse()
  }

  render() {
    // if selected, have the mark
    const innerSpan = (
      this.props.selected ?
        (
          <span className={styles.linkText + " " + styles.selectedLinkText}>{this.props.text}</span>
        )
        :
        (
          <span className={styles.linkText}>{this.props.text}</span>
        )
    )

    // css style for either collapsed or expanded
    const heightStyle = this.state.collapsed ? styles.collapsed : styles.expanded

    return (
      <li className={styles.navItem}>
        {this.props.selected &&
          <span className={styles.mark} />
        }
        <a className={styles.navLink} onClick={() => this.changeCollapse()}>
          { innerSpan }
        </a>
        <div ref={this.subnavRef} className={styles.subnavContent + ' ' + heightStyle}>
          <ul className={styles.subItems}>
            {this.props.children}
          </ul>
        </div>
      </li>
    )
  }
}
