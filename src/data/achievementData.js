import one from '../assets/svg/achievements/badm.png'
import two from '../assets/svg/achievements/Robo.png'
import three from '../assets/svg/achievements/Code.png'
import C1 from '../assets/svg/achievements/UCP.jpeg'
import C2 from '../assets/svg/achievements/CP.png'
import C3 from '../assets/svg/achievements/Pgc.png'
import C4 from '../assets/svg/achievements/Robotics.jpg'
import C5 from '../assets/svg/achievements/Badminton.jpeg'



export const achievementData = {
    bio : "A few things I've picked up along the way — on the court, in the lab, and under a competition clock.",
    achievements : [
        {
            id : 1,
            title : 'GCCK Badminton Championship',
            details : 'Championship title won while representing Garrison Cadet College Kohat.',
            date : '2023',
            field : 'Sports',
            image : one,
            demo : C5
        },
        {
            id : 2,
            title : 'Robotics Short Course',
            details : 'Completed a course covering the fundamentals of robotics.',
            date : '2024',
            field : 'Robotics',
            image : two,
            demo : C4
        },
        {
            id : 3,
            title : 'Speed Programming Code-Rush',
            details : 'Participant in speed programming competition, Finished at 10th Position',
            date : '2026',
            field : 'Programming',
            image : three,
            demo : C2
        },
        {
            id : 4,
            title : 'Speed Programming UCP',
            details : 'Participant in speed programming competition.',
            date : '2025',
            field : 'Programming',
            image : three,
            demo : C1
        },
        {
            id : 5,
            title : 'Badminton PGC',
            details : 'Represented PGC Sialkot during the Inter College Champioship.',
            date : '2025',
            field : 'Sports',
            image : one,
            demo : C3
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/
