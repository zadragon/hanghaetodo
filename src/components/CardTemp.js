import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const CardTemp = ({ id, title, date, body, isDone, onToggle, onDelete }) => {
	return (
		<Card key={id}>
			<Card.Content>
				<Image floated="right" size="mini" src="/steve.jpg" />
				<Card.Header>{title}</Card.Header>
				<Card.Meta>{date}</Card.Meta>
				<Card.Description>{body}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<div className="ui two buttons">
					<Button basic color="green" onClick={() => onToggle(id)}>
						{isDone ? "취소" : "완료"}
					</Button>
					<Button basic color="red" onClick={() => onDelete(id)}>
						삭제하기
					</Button>
				</div>
			</Card.Content>
		</Card>
	);
};

export default CardTemp;
