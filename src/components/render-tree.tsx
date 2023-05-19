import { Fragment } from 'react'

interface props {
    node: any;
}

const RenderTree = ({ node }: props) => {
    const { left, right, element } = node

    return (
        <Fragment>
            <div className="node__element">{element}</div>
            {
                left || right ? (
                    <>
                        <div className="node__bottom-line"></div>
                        <div className="node__children">
                            {
                                left && (
                                    <div className="node node--left">
                                        <RenderTree node={left} />
                                    </div>
                                )
                            }
                            {
                                right && (
                                    <div className="node node--right">
                                        <RenderTree node={right} />
                                    </div>
                                )
                            }
                        </div>
                    </>
                ) : null
            }

        </Fragment>
    )
}

export default RenderTree