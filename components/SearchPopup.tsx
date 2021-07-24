import { Button } from "@material-ui/core"
import React, { FC, useEffect, useState } from "react"
import Popup from "reactjs-popup"
import { TinyPodcast } from "../types"
import Search from "./Search"

interface SearchPopupProps {
  data: TinyPodcast[]
}

/**
 * Search popup with results.
 */
const SearchPopup: FC<SearchPopupProps> = ({ data }) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const closeSearchPopup = () => setSearchOpen(false)

  // Pressing q to opens search popup
  useEffect(() => {
    const handleOnKeyDown = (event: { keyCode: number }) => {
      // 81 is 'q'
      if (event.keyCode === 81) {
        setSearchOpen(true)
      }
    }
    window.addEventListener("keydown", handleOnKeyDown)
    return () => window.removeEventListener("keydown", handleOnKeyDown)
  }, [])

  // Prevent main page scrolling when the search popup is open.
  useEffect(() => {
    searchOpen && (document.body.style.overflow = "hidden")
    !searchOpen && (document.body.style.overflow = "unset")
  }, [searchOpen])

  return (
    <>
      <div>
        <Button id="search-btn" variant="contained" color="default" onClick={() => setSearchOpen((o) => !o)}>
          Search
        </Button>
        <Popup open={searchOpen} closeOnDocumentClick onClose={closeSearchPopup} modal lockScroll={true}>
          <Search data={data} closePopup={closeSearchPopup} />
        </Popup>
      </div>
    </>
  )
}

export default SearchPopup
