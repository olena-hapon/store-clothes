import React, { ChangeEvent, useState } from 'react';
import './Search.scss';
import cross from '../../images/Cross.svg';
import search from '../../images/Search.svg';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [clickInput, setClickInput] = useState(false);

  const onChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onClearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className={!!clickInput ? 'search search__top' : 'search'}>
      {/* {searchValue ? (
        <img
          src={cross}
          alt=""
          className='search__img'
          onClick={onClearSearch}
        />
        ): (
          <img
            src={search}
            alt=""
            className='search__img'
          />
        )
      } */}
      {!clickInput ? (
        <input
          type="text"
          placeholder='Search'
          className='search__input'
          value={searchValue}
          onChange={onChangeInput}
          onClick={() => setClickInput(!clickInput)}
        />
        ) : (
          <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4716 4.4714C12.7319 4.21105 12.7319 3.78894 12.4716 3.52859C12.2112 3.26824 11.7891 3.26824 11.5288 3.52859L8.00016 7.05719L4.47157 3.52859C4.21122 3.26824 3.78911 3.26824 3.52876 3.52859C3.26841 3.78894 3.26841 4.21105 3.52876 4.4714L7.05735 7.99999L3.52876 11.5286C3.26841 11.7889 3.26841 12.211 3.52876 12.4714C3.78911 12.7317 4.21122 12.7317 4.47157 12.4714L8.00016 8.9428L11.5288 12.4714C11.7891 12.7317 12.2112 12.7317 12.4716 12.4714C12.7319 12.211 12.7319 11.7889 12.4716 11.5286L8.94297 7.99999L12.4716 4.4714Z" fill="red"/>
          </svg>
      )}


    {clickInput ? (
      <div className="search__list">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa recusandae quo dolores, enim quia magni est reprehenderit dicta perferendis illum corporis veritatis ad possimus quidem eligendi magnam beatae hic.
        Reprehenderit, quae magnam. Necessitatibus facilis fugit error quos nesciunt at obcaecati saepe excepturi? Nam libero molestiae ex cum blanditiis quo aliquid similique nostrum obcaecati perspiciatis, et voluptatum consectetur ut omnis.
        Totam expedita dolorem dolores, magni vero, assumenda quod nesciunt rerum nulla excepturi iure deserunt illo temporibus aliquid vel labore amet aspernatur nisi blanditiis maxime perferendis? Dolores minima recusandae animi nesciunt!
        Perspiciatis vel dolorem deserunt earum mollitia quasi doloribus, est facere recusandae sit, officiis expedita impedit dolorum labore quo! Incidunt perferendis nulla ullam architecto qui sunt ratione neque esse quos. Dolor.
        Temporibus aut quasi deserunt impedit sapiente sequi officia blanditiis illo. Delectus, odio sapiente error magni tempore eaque magnam obcaecati velit dicta reprehenderit laborum beatae, doloremque cupiditate amet eius tempora sit!
        Necessitatibus veritatis placeat debitis quasi deleniti veniam sunt commodi odit voluptatem voluptatum, ut libero tempora ea ratione, reprehenderit quod accusantium ipsam inventore velit et at in saepe aliquid. Blanditiis, ullam.
        Tempora ipsum commodi eum quod. Ipsam accusantium eius omnis aliquam rerum consequuntur cum, hic numquam deleniti quos eligendi? Esse eligendi necessitatibus odio laborum officia maxime minus at. Maxime, eos iusto.
        Porro nulla molestiae quidem dicta. Quos distinctio a cupiditate molestiae laudantium labore odio iste nobis nam blanditiis beatae, voluptatem mollitia esse itaque accusamus praesentium modi voluptate. Temporibus architecto omnis dolorum!
        Optio ipsam sunt similique alias, culpa asperiores ratione animi deleniti earum saepe ea minima eveniet quidem accusantium perspiciatis unde necessitatibus praesentium. Quas sequi officiis eum amet natus illum rerum error.
        Vero dignissimos magni dolorem ullam consectetur sequi quidem esse iure recusandae cum, beatae nobis aperiam dolor maiores illo voluptates ipsam. Ex possimus mollitia nulla consequatur tempora deserunt odio aperiam recusandae?
        Laudantium dolorum nam pariatur aliquid facere amet quidem earum quos unde reprehenderit veritatis recusandae deleniti dolores aperiam aliquam architecto fugiat quia temporibus nesciunt quibusdam, sit beatae! Hic eligendi labore id!
        Vero debitis assumenda enim accusamus non unde. Assumenda esse voluptatem ex suscipit vitae perferendis ad expedita. Dignissimos facere quibusdam iste consequuntur, vero dolor! Dolor modi distinctio, sed quas blanditiis a?
        Deleniti enim assumenda culpa sit id illum, voluptatem vel iusto incidunt quibusdam deserunt numquam, sequi ea, tempora repellendus dolore et. Explicabo placeat, totam velit sit est reprehenderit sunt nostrum minima.
        Saepe eos maiores architecto exercitationem laboriosam sequi repudiandae quis? Esse assumenda rerum, asperiores eius illum harum accusantium laboriosam beatae nisi saepe iste blanditiis. Sunt, aut assumenda nam iste laudantium vero?
        Necessitatibus nisi assumenda odio accusantium est quod excepturi illum corporis enim sit itaque iure beatae quis adipisci odit veniam voluptates alias ipsa modi voluptatem quaerat, pariatur voluptate inventore accusamus? Suscipit?
        Repellendus eum ea obcaecati quidem doloremque nulla amet veritatis ipsa accusamus saepe consectetur, dicta deserunt perspiciatis ad molestias sequi veniam, sunt dolorum dolor labore minus repellat porro a distinctio? Voluptate.
        Corrupti ullam magni sapiente voluptatibus a minus molestiae labore delectus modi earum cupiditate hic, in et soluta tempore itaque voluptatem deserunt ea quis voluptas exercitationem impedit sunt! Saepe, tempora dolor?
        Ab, quos. Quas temporibus, ex, aspernatur iste maiores autem esse sunt eum obcaecati placeat earum similique? Laudantium accusamus maiores tenetur dicta aliquam, dignissimos magnam unde officia error ab a culpa?
        Sit quo a consequuntur aut ducimus esse hic quae qui cupiditate, doloribus adipisci eveniet soluta optio quisquam quod quos facere voluptas sapiente dolores beatae perferendis! Architecto odit possimus adipisci magnam.
        Eaque molestiae cupiditate nisi, soluta id aliquam veniam aliquid ex nihil ullam saepe ab natus iure ut quo expedita reprehenderit molestias repudiandae ipsam! Quisquam obcaecati, doloremque odio velit commodi aspernatur!
        Sint a ad, ut odio iure, omnis facere id et recusandae nisi odit repudiandae alias quis laudantium hic praesentium doloremque soluta quod nihil corrupti cum ea at. Pariatur, dolorum quasi!
        Voluptates, consequatur! Eos dolores obcaecati accusamus ab officiis, ad sit ratione nisi vitae maiores eaque inventore maxime natus suscipit corporis tenetur blanditiis fuga beatae neque veniam reprehenderit deleniti! Vel, eveniet?
        Eius earum fuga error quasi. Veniam, nostrum illum natus excepturi tenetur esse assumenda at reiciendis delectus voluptate porro commodi dignissimos incidunt unde tempora quidem. Accusamus pariatur impedit unde earum enim.
        Labore aperiam deserunt ipsum architecto distinctio voluptatibus, consequuntur nemo, cum iure atque quasi cumque! Corporis possimus aliquam perspiciatis vel, impedit aut, vitae eius tempore sed officia ducimus facere, amet fugiat.
        Quam rerum ipsum tenetur, cum tempore pariatur incidunt esse laboriosam doloremque quae voluptas saepe et eum necessitatibus. Labore, voluptatum quia ea eum enim, aperiam cum exercitationem provident consectetur veritatis obcaecati!
        Nesciunt consectetur, amet atque at unde voluptas saepe velit, rerum neque, optio itaque quis! Quasi eaque non autem nam ut beatae a error nihil atque inventore. Aperiam illo reiciendis qui!
        Repudiandae reiciendis iusto rerum officia cupiditate adipisci, molestias sapiente repellat nam consectetur dolorum molestiae explicabo consequuntur, ullam cumque aliquid non aspernatur! Similique voluptatibus vitae fugit eaque numquam? Deleniti, inventore eius!
        Cum corrupti sapiente voluptatibus tempore necessitatibus, pariatur vel quo ut veritatis libero, explicabo omnis aliquam facere. Neque laudantium cumque labore, ab ducimus mollitia explicabo modi expedita officia aspernatur, voluptas nihil!
        At, voluptas quia optio quam accusantium aliquam veniam corrupti nobis? Quos dolores sunt illum earum magni voluptatem voluptatibus, fuga deleniti natus nemo dolor vitae nesciunt? Modi saepe fugiat dolores voluptas.
        Debitis vero, praesentium quis, architecto ad quibusdam reiciendis culpa ex, ipsa assumenda adipisci possimus fugit provident placeat incidunt deleniti porro commodi delectus iusto? Laudantium doloremque odio aspernatur veritatis nihil aperiam?
        <div className="search__list__wrap"></div>
      </div>
    ) : (
      ''
    )}
    </div>
  )
}

export default Search