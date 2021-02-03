export const config = {
    "dev": {
        "username": "postgres",
        "password": "rdschallengedme",
        "database": "md_database",
        "host": "rds-posgresql-exercise-md.cx9rlx1wfnfq.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-mugisha-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
