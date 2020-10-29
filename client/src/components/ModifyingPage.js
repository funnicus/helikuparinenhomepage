import React from 'react'

const ModifyingPage = ({ collection, collectionEn, handleCollectionChange, handleCollectionChangeEn, name, nameEn, handleNameChange, handleNameChangeEn, desc, descEn, handleDescChange, handleDescChangeEn, files, handleFileChange, addCollection, collectionsSelector }) => {
    return(
      <div className='admin-page'>
          <div className='Form'>
              <form action="/profile" method="post" encType="multipart/form-data">
                  <div id='select-collection'>
                      <input 
                      type='text'
                      id='collection'
                      value={collection}
                      name='Collection'
                      placeholder='Kokoelman nimi...'
                      onChange={e => handleCollectionChange(e)}
                      />
                      <input 
                      type='text'
                      id='collectionEn'
                      value={collectionEn}
                      name='CollectionEn'
                      placeholder='Kokoelman nimi englanniksi...'
                      onChange={e => handleCollectionChangeEn(e)}
                      />
                      <select>
                      <optgroup label="Lisää jo olemassa olevaan kokoelmaan">
                          {collectionsSelector}
                      </optgroup>
                      </select>
                  </div>
                  <input 
                  type='text'
                  id='name'
                  value={name}
                  name='name'
                  placeholder='taulun nimi'
                  onChange={e => handleNameChange(e)}
                  />
                  <input 
                  type='text'
                  id='nameEn'
                  value={nameEn}
                  name='nameEn'
                  placeholder='taulun nimi engalnniksi'
                  onChange={e => handleNameChangeEn(e)}
                  />
                  <input 
                  type='text'
                  id='description'
                  value={desc}
                  name='description'
                  placeholder='xcm x ycm, tekniikka'
                  onChange={e => handleDescChange(e)}
                  />
                  <input 
                  type='text'
                  id='descriptionEn'
                  value={descEn}
                  name='descriptionEn'
                  placeholder='xcm x ycm, technique'
                  onChange={e => handleDescChangeEn(e)}
                  />
                  <input 
                    type="file"
                    id='file'
                    name="File" 
                    onChange={e => handleFileChange(e)}
                  />
                  <button id='submit-button' onClick={addCollection}>lataa...</button>
              </form>
          </div>
      </div>
    )
}

export default ModifyingPage