import React from 'react'

const ModifyingPage = ({ collection, handleCollectionChange, name, handleNameChange,desc, handleDescChange, files, handleFileChange, addCollection, collectionsSelector }) => {
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
                  id='description'
                  value={desc}
                  name='description'
                  placeholder='xcm x ycm, tekniikka'
                  onChange={e => handleDescChange(e)}
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