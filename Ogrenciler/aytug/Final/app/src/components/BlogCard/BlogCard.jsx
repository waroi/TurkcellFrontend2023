import * as S from "./BlogCard.style";
import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
	return (
		<div className="col-6 col-lg-4">
			<S.CardLink href={`/articles/${blog.id}`}>
				<S.Card>
					<S.CardImage src={blog.image} />
					<S.CardBody>
						<S.CardCategory>{blog.category}</S.CardCategory>
						<S.CardTitle>{blog.title}</S.CardTitle>
						<S.CardText>{blog.description}</S.CardText>
					</S.CardBody>
				</S.Card>
			</S.CardLink>
		</div>
	);
};

BlogCard.propTypes = {
	blog: PropTypes.object,
};

export default BlogCard;
