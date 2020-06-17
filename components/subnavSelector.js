import styles from './subnavSelector.module.css'
import utilStyles from '../styles/utils.module.css'

export default class SubnavSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: true }
    this.changeCollapse = this.changeCollapse.bind(this)
    this.collapse = this.collapse.bind(this)
    this.expand = this.expand.bind(this)
    this.subnavRef = React.createRef();
  }

  collapse() {
    let elem = this.subnavRef.current
    // get the height of the element's inner content, regardless of its actual size
    const sectionHeight = elem.scrollHeight
    // temporarily disable all css transitions
    const elementTransition = elem.style.transition
    elem.style.transition = ''

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      elem.style.height = sectionHeight + 'px'
      elem.style.transition = elementTransition

      // on the next frame (as soon as the previous style change has taken effect),
      // remove "height" from the element's inline styles, so it can return to its initial value
      requestAnimationFrame(function() {
        elem.style.height = null
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
      elem.style.height = 'auto'
    });

    // mark the section as not collapsed
    this.setState({ collapsed: false })
  }

  changeCollapse() {
    this.props.toggleNav()
    if(this.state.collapsed) this.expand()
    else this.collapse()
  }

  render() {
    const innerSpan = (
      this.props.selected ?
        (
          <>
            <span className={styles.mark} />
            <span className={styles.linkText + " " + styles.selectedLinkText}>{this.props.text}</span>
          </>
        )
        :
        (
          <span className={styles.linkText}>{this.props.text}</span>
        )
    )

    return (
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={() => this.changeCollapse()}>
          { innerSpan }
        </a>
        <div ref={this.subnavRef} className={styles.subnavContent}>
          <ul className={styles.subItems}>
            {this.props.children}
          </ul>
        </div>
      </li>
    )
  }
}
