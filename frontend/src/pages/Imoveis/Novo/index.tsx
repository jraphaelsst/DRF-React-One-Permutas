import { useEffect, useState } from 'react'

import Container from '../../../containers/Container'
import DropDown from '../../../components/DropDown'
import DropDownContainer from '../../../containers/DropDownContainer'

import { Form, FormField, FormInput, FormLabel } from './styles'

const NovoImovel = () => {
  const [imovelActive, setImovelActive] = useState(false)
  useEffect(() => {
    const imovelDropDownEl = document.getElementById('imovel-dropdown')
    const imovelForm = document.getElementById('imovel-form')
    const imovelInputFields =
      document.getElementsByClassName('imovel-input-field')

    const addClass = (el: HTMLElement, els: HTMLCollectionOf<Element>) => {
      el?.classList.add('active')
      for (let i = 0; i < els.length; i++) {
        els[i].classList.add('activeInput')
      }
    }

    const handleClick = () => {
      setImovelActive(!imovelActive)
      imovelActive
        ? addClass(imovelForm!, imovelInputFields)
        : imovelForm?.classList.remove('active')
    }
    imovelDropDownEl?.addEventListener('click', handleClick)
    return () => {
      imovelDropDownEl?.removeEventListener('click', handleClick)
    }
  }, [imovelActive])

  const [proprietarioActive, setProprietarioActive] = useState(false)
  useEffect(() => {
    const propDropDownEl = document.getElementById('proprietario-dropdown')
    const propForm = document.getElementById('proprietario-form')
    const propInputFields = document.getElementsByClassName(
      'proprietario-input-field'
    )

    const addClass = (el: HTMLElement, els: HTMLCollectionOf<Element>) => {
      el?.classList.add('active')
      for (let i = 0; i < els.length; i++) {
        els[i].classList.add('activeInput')
      }
    }

    const handleClick = () => {
      setProprietarioActive(!proprietarioActive)
      proprietarioActive
        ? addClass(propForm!, propInputFields)
        : propForm?.classList.remove('active')
    }
    propDropDownEl?.addEventListener('click', handleClick)
    return () => {
      propDropDownEl?.removeEventListener('click', handleClick)
    }
  }, [proprietarioActive])

  const [permutaActive, setPermutaActive] = useState(false)
  useEffect(() => {
    const permDropDownEl = document.getElementById('permuta-dropdown')
    const permForm = document.getElementById('permuta-form')
    const permInputFields = document.getElementsByClassName(
      'permuta-input-field'
    )

    const addClass = (el: HTMLElement, els: HTMLCollectionOf<Element>) => {
      el?.classList.add('active')
      for (let i = 0; i < els.length; i++) {
        els[i].classList.add('activeInput')
      }
    }

    const handleClick = () => {
      setPermutaActive(!permutaActive)
      permutaActive
        ? addClass(permForm!, permInputFields)
        : permForm?.classList.remove('active')
    }
    permDropDownEl?.addEventListener('click', handleClick)
    return () => {
      permDropDownEl?.removeEventListener('click', handleClick)
    }
  }, [permutaActive])

  return (
    <Container title="Novo Imóvel">
      <DropDownContainer>
        <div>
          <DropDown id="imovel-dropdown" title="Imóvel" />
          <Form id="imovel-form" className="">
            <FormField className="imovel-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="imovel-input-field">
              <FormLabel>Valor de Venda:</FormLabel>
              <FormInput id="valor-venda" type="number" />
            </FormField>
            <FormField className="imovel-input-field">
              <FormLabel>Valor de Alugel:</FormLabel>
              <FormInput id="valor-aluguel" type="number" />
            </FormField>
            <FormField className="imovel-input-field">
              <FormLabel>Valor de IPTU:</FormLabel>
              <FormInput id="valor-iptu" type="number" />
            </FormField>
            <FormField className="imovel-input-field">
              <FormLabel>Ano de Construção:</FormLabel>
              <FormInput id="ano-construcao" type="date" />
            </FormField>
            <FormField className="imovel-input-field">
              <FormLabel>Ano de Reforma:</FormLabel>
              <FormInput id="ano-reforma" type="date" />
            </FormField>
            <FormField className="imovel-input-field">
              <FormLabel>Observações:</FormLabel>
              <textarea id="observacoes" cols={50} />
            </FormField>
          </Form>
        </div>
        <div>
          <DropDown id="proprietario-dropdown" title="Proprietário" />
          <Form id="proprietario-form" className="">
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="proprietario-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
          </Form>
        </div>
        <div>
          <DropDown id="permuta-dropdown" title="Permutas" />
          <Form id="permuta-form" className="">
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
            <FormField className="permuta-input-field">
              <FormLabel>Ref:</FormLabel>
              <FormInput id="ref" type="text" />
            </FormField>
          </Form>
        </div>
      </DropDownContainer>
    </Container>
  )
}

export default NovoImovel
