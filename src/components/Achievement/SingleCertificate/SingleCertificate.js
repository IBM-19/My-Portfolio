import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaAward } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleCertificate.css';

function SingleCertificate({ id, title, details, date, image, demo, theme }) {
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
        },
    }));

    const classes = useStyles();
    const slug = title.replace(' ', '-').toLowerCase();

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleCertificate'
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className='certificateContent'>
                    <h2 id={slug} style={{ color: theme.tertiary }}>
                        {title}
                    </h2>
                    <img src={image ? image : placeholder} alt={title} />
                    <div className='certificate--showcaseBtn'>
                        {demo && (
                            <a
                                href={demo}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.iconBtn}
                                aria-labelledby={`${slug} ${slug}-certificate`}
                            >
                                <FaAward
                                    id={`${slug}-certificate`}
                                    className={classes.icon}
                                    aria-label='Certificate'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <p
                    className='certificate--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {details}
                </p>
                <div
                    className='certificate--date'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    <span>{date}</span>
                </div>
            </div>
        </Fade>
    );
}

export default SingleCertificate;
