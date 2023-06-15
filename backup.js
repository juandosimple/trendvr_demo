   <script>
        document.addEventListener("DOMContentLoaded", function () {
            let counter = 0
            var link = document.getElementById("check-size-link");
            var closeModalButton = document.getElementById("ui-close_modal");
            var fitGuide = document.getElementById("fit-guide");
            const sizeItems = document.querySelectorAll('.widget-size_item a');
            const colorItems = document.querySelectorAll('.choose_color-list li');
            // Iterar sobre cada elemento y agregar el controlador de evento clic
            sizeItems.forEach(function (item) {
                item.addEventListener('click', function (event) {
                    event.preventDefault();

                    // Verificar si el elemento no tiene la clase "no_stock"
                    if (!this.parentNode.classList.contains('no_stock')) {
                        // Remover la clase "active-size" de todos los elementos
                        sizeItems.forEach(function (item) {
                            item.classList.remove('active-size');
                        });

                        // Agregar la clase "active-size" al elemento clicado
                        this.classList.add('active-size');
                    }
                });
            });


            // Get the <a> element by its class
            var spinLink = document.querySelector('.ui-main_stage-spin');

            // Add a click event to the element
            spinLink.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default behavior of the link

                // Actions to perform when the element is clicked
                anime({
                    targets: '#x-small_spin',
                    opacity: 1,
                    zIndex: counter++,
                    easing: 'easeInOutQuad',
                    duration: 500,
                    complete: function () {
                        counter++;
                    }
                });

            });

            colorItems.forEach(function (item) {
                item.addEventListener('click', function (event) {
                    event.preventDefault();

                    if (!this.classList.contains('color_no_stock')) {
                        colorItems.forEach(function (item) {
                            item.classList.remove('active');
                        });

                        this.classList.add('active');   
                        const selectedColor = this.getAttribute('data-color');
                        let selectedVideo = `#x-small_${selectedColor}`;
                        console.log(selectedVideo)
                        anime({
                            targets: selectedVideo,
                            opacity: 1,
                            zIndex: counter++,
                            easing: 'easeInOutQuad',
                            duration: 500,
                            complete: function () {
                                counter++;
                            }
                        });
                    }
                });
            });


            // Obtener el elemento del video
            var video_xsmall = document.getElementById("x-small_idle");

            // Obtener el elemento de la opción XS en el control
            var xsOption = document.querySelector(".widget-size_item a[data-size='x-small']");

            // Agregar un evento de clic a la opción XS
            xsOption.addEventListener("click", function (event) {
                event.preventDefault();

                // Cambiar la opacidad del video utilizando la biblioteca anime.js
                anime({
                    targets: video_xsmall,
                    opacity: 1,
                    zIndex: counter++,
                    easing: 'easeInOutQuad',
                    duration: 500,
                    complete: function () {
                        video_xsmall.play();
                        counter++;
                        anime({
                            targets: video_small,
                            opacity: 0,
                            zIndex: 88,
                            easing: 'easeInOutQuad',
                            duration: 500,
                        });
                    }
                });
            });


            // Obtener el elemento del video
            var video_small = document.getElementById("small_idle");
            // Obtener el elemento de la opción S en el control
            var sOption = document.querySelector(".widget-size_item a[data-size='small']");

            // Agregar un evento de clic a la opción S
            sOption.addEventListener("click", function (event) {
                event.preventDefault();

                // Cambiar la opacidad del video utilizando la biblioteca anime.js
                anime({
                    targets: video_small,
                    opacity: 1,
                    zIndex: counter++,
                    easing: 'easeInOutQuad',
                    duration: 500,
                    complete: function () {
                        small_idle.play();
                        counter++;
                        anime({
                            targets: video_xsmall,
                            opacity: 0,
                            zIndex: 87,
                            easing: 'easeInOutQuad',
                            duration: 500,
                        });
                    }
                });
            });

            var tl = anime.timeline({
                easing: 'easeOutExpo',
                duration: 750
            });

            closeModalButton.addEventListener("click", function (e) {
                e.preventDefault();
                anime({
                    targets: '.ui-fit_modal',
                    translateY: 100,
                    opacity: 0,
                    easing: 'easeInOutQuad',
                    duration: 500,
                });
            });

            link.addEventListener("click", function (e) {
                e.preventDefault();

                if (fitGuide.classList.contains("show")) {
                    fitGuide.classList.remove("show");
                    // Create a timeline with default parameters
                    var tl = anime.timeline({
                        easing: 'easeInOutQuad',
                        duration: 500
                    });

                    // Add children
                    tl
                        .add({
                            targets: '.ui-fit_guide',
                            translateY: -200,
                        })
                        .add({
                            targets: '.ui-fit_modal',
                            translateY: 100,
                            opacity: 0,
                        })



                    link.textContent = "Check how it fits";

                    anime({
                        targets: '#strain_idle',
                        opacity: '0',
                        easing: 'easeInOutQuad',
                        duration: 500,
                        zIndex: counter++,
                        complete: function () {
                            counter++,
                                anime({
                                    targets: '#x-small_idle',
                                    opacity: '1',
                                    zIndex: counter++,
                                    easing: 'easeInOutQuad',
                                    duration: 500,
                                });
                        }
                    });
                } else {
                    fitGuide.classList.add("show");
                    link.textContent = "Normal view";
                    anime({
                        targets: '.ui-fit_guide',
                        translateY: 50,
                        duration: 500,

                    });
                    anime({
                        targets: '#x-small_idle',
                        opacity: '0',
                        easing: 'easeInOutQuad',
                        duration: 500,
                        complete: function () {
                            anime({
                                targets: '#strain_idle',
                                opacity: '1',
                                easing: 'easeInOutQuad',
                                duration: 500,
                                complete: function () {
                                    anime({
                                        targets: '.ui-fit_modal',
                                        translateY: 30,
                                        opacity: 1,
                                        easing: 'easeInOutQuad',
                                        duration: 500,
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });
    </script>