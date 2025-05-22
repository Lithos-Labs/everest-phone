import { QuartzComponentConstructor } from "./types"
import style from "./styles/extraLinks.scss"

export default (() => {
  function ExtraLinks() {
    return (
      <div id="links-header-container">
        <div id="links-header">        
            <a class="links-header-item" href="https://github.com/lithos-labs/everest-phone">
              GitHub
            </a>
            <a class="links-header-item" href="https://discord.gg/bwRytsY3ux">
              Discord
            </a>
        </div>
      </div>
    )
  }

  ExtraLinks.css = style
  return ExtraLinks
}) satisfies QuartzComponentConstructor