function updateStyles() {
    const screenWidth = window.innerWidth;
    const styleElement = document.getElementById('dynamic-style'); // Найдем элемент <style> по id

    if (!styleElement) {
        // Если элемент <style> не существует, создаем его и добавляем в <head>
        const newStyleElement = document.createElement('style');
        newStyleElement.id = 'dynamic-style';
        document.head.appendChild(newStyleElement);
    }

    const styleSheet = document.getElementById('dynamic-style').sheet;

    if (screenWidth <= 530) {
        // Если ширина экрана меньше или равна 530px, применяем стили для мобильных устройств
        styleSheet.insertRule(`@media screen and (max-width: ${screenWidth}px) { header {
            height: 10%; /* Увеличьте высоту заголовка для лучшего взаимодействия с сенсорными устройствами */
        }
        .footer-info{
            font-size: 80%;
        }
        .footer-info p{
            text-align: left;
        }
        nav {
          display: none;    
      }
      
      .nav {
          display: flex;
          justify-content: right;
          align-items: right;
          position: relative;
          background-color: #fff;
          padding: 20px;
          transition: 0.5s;
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 8px 15px rgba(0,0,0,.2);
      }
      
      .menu {
          margin: 0;
          padding: 0;
          width: 0;
          overflow: hidden;
          transition: 0.5s;
      }
      
      .nav input:checked ~ .menu {
          width: 450px;
      }
      
      .menu li {
          list-style: none;
          margin: 0 10px;
      }
      .menu ul {
        list-style: none;
        margin: 0;
        padding: 2%;
        display: flex;
        float: right;
        margin-right: 7%;
      }
      
      .menu li a {
          text-decoration: none;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          color: #000;
          font-size: 0.5em;
          text-transform: none;
          font-weight: 500;
          transition: 0.5s;
          font-family: "Franklin Gothic";
      }
      
      .menu li a:hover {
          color: black;
      }
      
      .nav input {
          width: 40px;
          height: 40px;
          cursor: pointer;
          opacity: 0;
          position: absolute;
        }
      
      .nav span {
          position: absolute;
          width: 30px;
          height: 4px;
          margin-right: 1%;
          margin-top: 2%;
          border-radius: 50px;
          background-color: #000;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          pointer-events: none;
          transition: 0.5s;
      }
      
      .nav input:checked ~ span {
          background-color: #000;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      
      .nav span:nth-child(2) {
          transform: translateY(-8px);
      }
      
      .nav input:checked ~ span:nth-child(2) {
          transform: translateY(0) rotate(-45deg);
      }
      .nav span:nth-child(3) {
          transform: translateY(8px);
      }
      
      .nav input:checked ~ span:nth-child(3) {
          transform: translateY(0) rotate(45deg);
      } }`, 0);
    } else if (styleSheet.cssRules.length > 0) {
        // Проверяем, есть ли правила в таблице стилей перед удалением
        styleSheet.deleteRule(0);
    }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener('load', updateStyles);
window.addEventListener('resize', updateStyles);
