import { animate, createScope, spring, Scope, createDraggable, createTimeline } from 'animejs';
import { useEffect, useRef, useState } from 'react';

import { stagger, splitText } from 'animejs';
import { waapi } from 'animejs';


export default () => {
    const root = useRef<HTMLDivElement>(null);
    const square = useRef<SVGSVGElement>(null);

    const scope = useRef<Scope>(null);
    const [rotations, setRotations] = useState(0);

    useEffect(() => {

        if (root.current !== null) {
            // waapi.animate(root.current,  {
            //     backgroundColor: 'color(display-p3 1.0 0.267 0.267 / 1.0)',
            //     color: 'color(display-p3 1.0 1.0 1.0 / 1.0)',
            // });
        }

        if (square.current !== null) {
            waapi.animate(square.current,  {
                // transform: 'rotate(360deg)',
                transform: 'scale(3)',
                // scale: '+=.25',
                transformOrigin: '0% 0%',
                // easing: 'ease-in',
                duration: 2000,
                iterations: Infinity,
            });
        }

        /*
        scope.current = createScope({ root }).add(self => {

            // Every Anime.js instance declared here is now scoped to <div ref={root}>

            // Created a bounce animation loop
            animate('.logo', {
                scale: [
                    { to: 1.25, ease: 'inOut(3)', duration: 200 },
                    { to: 1, ease: spring({ bounce: .7 }) }
                ],
                loop: true,
                loopDelay: 250,
            });

            // Make the logo draggable around its center
            createDraggable('.logo', {
                container: [0, 0, 0, 0],
                releaseEase: spring({ bounce: .7 })
            });

            // Register function methods to be used outside the useEffect
            self?.add('rotateLogo', (i) => {
                animate('.logo', {
                    rotate: i * 360,
                    ease: 'out(4)',
                    duration: 1500,
                });
            });

        });
        */

        /*
        const { words, chars } = splitText('h1', { words: false, chars: true });

        console.log(chars);

        createTimeline({
            loop: true,
            defaults: { ease: 'inOut(3)', duration: 650 }
        })
            .add(words, {
                y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
            }, stagger(125))
            .add(chars, {
                y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
            }, stagger(10, { from: 'random' }))
            .init();
*/
        /*

        animate(chars, {
            // Property keyframes
            y: [
                { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
            ],
            // Property specific parameters
            rotate: {
                from: '-1turn',
                delay: 0
            },
            delay: stagger(50),
            ease: 'inOutCirc',
            loopDelay: 1000,
            loop: true
        });
        */

        // Properly cleanup all Anime.js instances declared inside the scope
        // return () => scope.current?.revert()

    }, []);

    return (
        <div ref={root} className="fixed top-0 left-0 min-w-screen min-h-screen -z-1">
            <svg className="relative" ref={square} width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="1" height="1" fill="#000000"/>
            </svg>
        </div>
    )
};