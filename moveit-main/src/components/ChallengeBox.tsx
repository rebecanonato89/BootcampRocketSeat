import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';
import { CompletedChallenges } from './CompletedChallenges';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challegeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challegeActive}>
                    <header>Ganhe {activeChallenge.amount}xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailed}
                            onClick={handleChallengeFailed}>
                            Falhei
                        </button>
                        <button type="button" className={styles.challengeSucceeded}
                            onClick={handleChallengeSucceeded}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challegeNotActive}>
                        <strong>Finalize um ciclo para receber os desafios.</strong>
                    <p>
                            <img src="icons/level-up.svg" alt="level up" />
                        Avance de Level completando os desafios.
                    </p>
                </div>
                )}
        </div>
    );
}