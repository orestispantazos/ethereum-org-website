import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import Link from "./Link"
import { getDefaultMessage, supportedLanguages } from "../utils/translations"

const Crumb = styled.h4`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  font-weight: normal;
`

const List = styled.ul`
  margin: 0;
  margin-bottom: 2rem;
  list-style-type: none;
  display: flex;
  /* Avoid header overlap: */
  position: relative;
  z-index: 1;
`

const ListItem = styled.li`
  margin: 0;
  margin-right: 0.5rem;
`

const Slash = styled.span`
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.textSidebar};
`

// TODO fix isPartiallyActive
const CrumbLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textSidebar};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

const Breadcrumbs = ({ slug }) => {
  // Generate crumbs from slug
  // e.g. "/en/eth2/proof-of-stake/" will generate:
  // [
  //   { fullPath: "/en/", text: "HOME" },
  //   { fullPath: "/en/eth2/", text: "ETH2" },
  //   { fullPath: "/en/eth2/proof-of-stake/", text: "PROOF OF STAKE" },
  // ]
  const intl = useIntl()
  const split = slug.split("/")
  const crumbs = split
    .filter((item) => !!item)
    .map((path, idx) => {
      // If homepage (e.g. "en"), set text to "home" translation
      const text = supportedLanguages.includes(path)
        ? intl.formatMessage({
            id: "page-home-meta-title",
            defaultMessage: getDefaultMessage("page-home-meta-title"),
          })
        : path.replace(/-/g, " ") // TODO how to translate?
      return {
        fullPath: split.slice(0, idx + 2).join("/") + "/",
        text: text.toUpperCase(),
      }
    })

  return (
    <List>
      {crumbs.map((crumb, idx) => {
        return (
          <ListItem key={idx}>
            <Crumb>
              <CrumbLink to={crumb.fullPath}>{crumb.text}</CrumbLink>
              {idx < crumbs.length - 1 && <Slash>/</Slash>}
            </Crumb>
          </ListItem>
        )
      })}
    </List>
  )
}

export default Breadcrumbs
