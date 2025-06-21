import React from 'react'
import Section from '../Section'

import { Items, Item, Action, Modal, ModalContente } from './styles'
import { GalleryItems } from '../../pages/Home'

import horgworts from '../../assets/images/image-hogwortslegacy.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/botao-play 1.png'
import zoom from '../../assets/images/mais-zoom 1.png'
import fechar from '../../assets/images/fechar.png'

const mock: GalleryItems[] = [
  {
    type: 'imagem',
    url: horgworts
  },
  {
    type: 'video',
    url: spiderman
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=uz-4ZA9F8pCEdZZL'
  }
]

type Props = {
  defaultCover?: string
  name: string
  items: GalleryItems[]
}

interface ModalState extends GalleryItems {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = React.useState<ModalState>({
    isVisible: false,
    type: 'imagem',
    url: ''
  })

  const getMediaCover = (item: GalleryItems) => {
    if (item.type === 'imagem') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItems) => {
    if (item.type === 'imagem') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'imagem',
      url: ''
    })
  }

  return (
    <>
      <Section title={'Galeria'} background={'black'}>
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContente className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContente>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
