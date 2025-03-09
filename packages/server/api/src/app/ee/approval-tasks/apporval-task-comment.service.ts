import { ApprovalTaskComment } from '@activepieces/ee-shared'
import { FastifyBaseLogger } from 'fastify'
import { repoFactory } from '../../core/db/repo-factory'
import { ApprovalTaskCommentEntity } from './apporval-task.entity'

const approvalTaskCommentRepo = repoFactory(ApprovalTaskCommentEntity)  

export const approvalTaskCommentService = (_log: FastifyBaseLogger) => {
    return {
        async list({ taskId }: { taskId: string }): Promise<ApprovalTaskComment[]> {
            return approvalTaskCommentRepo().findBy({ taskId })
        },
        async create({ taskId, userId, comment }: { taskId: string, userId: string, comment: string }): Promise<ApprovalTaskComment> {
            return approvalTaskCommentRepo().create({ taskId, userId, comment })
        },
    }
}
